import { useMutation, useQuery } from "@tanstack/react-query";
import { Resume } from "@/app/types/resume";
import toast from "react-hot-toast";
import axiosInstance from "@/helpers/axiosInstance";
import axios from "axios";
import { getHeaders } from "@/helpers/headers";

interface UploadPayload {
  resume: File;
  userId: string;
}

interface ListResumeResponse {
  count: number;
  list: Resume[];
}

// apis
const upload = async ({ resume, userId }: UploadPayload): Promise<Resume> => {
  try {
    const formData = new FormData();
    formData.append("file", resume);
    formData.append("user_id", userId);

    const { data } = await axiosInstance.post<Resume>(
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

const listResume = async (userId : string): Promise<ListResumeResponse> => {
  try {
    const { data } = await axiosInstance.get<ListResumeResponse>(
      `/resumes/all/${userId}`,
      {
        headers: getHeaders()
      }
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error ?? "Couldn't fetch Resume");
    } else {
      console.log("Couldn't fetch Resume:", error);
      throw new Error("Couldn't fetch Resume");
    }
  }
};

// queries 
export const useFetchResumeQuery = (
  userId: string,
) => {
  return useQuery({
    queryKey: ["resume"],
    queryFn: () => listResume(userId),
    placeholderData: (prev) => prev,
  });
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
