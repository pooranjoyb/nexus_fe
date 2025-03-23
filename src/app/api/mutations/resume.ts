import { useMutation } from "@tanstack/react-query";
import { User } from "@/app/types/user";
import toast from "react-hot-toast";
import axiosInstance from "@/helpers/axiosInstance";
import axios from "axios";

interface UploadPayload {
  resume: File;
  userId: string;
}

// apis
const upload = async ({ resume, userId }: UploadPayload): Promise<User> => {
  try {
    const formData = new FormData();
    formData.append("file", resume);
    formData.append("user_id", userId);

    const { data } = await axiosInstance.post<User>(
      "/resumes/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error ?? "Upload failed");
    } else {
      console.log("Upload error:", error);
      throw new Error("Upload failed");
    }
  }
};

// mutations
export const useUploadMutation = () => {
  return useMutation({
    mutationFn: upload,
    onSuccess: () => {
      toast.success("Resume Uploaded successfully!");
    },
    onError: (error: Error) => {
      console.log(error);
      toast.error(error?.message ?? "Resume Upload failed. Please try again.");
    },
  });
};
