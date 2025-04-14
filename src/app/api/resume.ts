import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Resume, RootResume } from "@/app/types/resume";
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

interface AnalyseResumePayload {
  user_id: string;
  resume_id: string;
  job_description: string;
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

const analyse = async (payload: AnalyseResumePayload): Promise<RootResume> => {
  try {
    const { data } = await axiosInstance.post<RootResume>("/resumes/analyze", payload);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error ?? "Analysis Failed");
    } else {
      console.log("Analysis Failed:", error);
      throw new Error("Analysis Failed");
    }
  }
};

const listResume = async (userId: string): Promise<ListResumeResponse> => {
  try {
    const { data } = await axiosInstance.get<ListResumeResponse>(
      `/resumes/all/${userId}`,
      {
        headers: getHeaders(),
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
export const useFetchResumeQuery = (userId: string) => {
  return useQuery({
    queryKey: ["resume"],
    queryFn: () => listResume(userId),
    placeholderData: (prev) => prev,
  });
};

export const useFetchResumeDataQuery = (resumeId: string | undefined) => {
  return useQuery({
    queryKey: ["resume-data", resumeId],
    queryFn: async () => {
      if (!resumeId) {
        return null;
      }
      const payload: AnalyseResumePayload = {
        user_id: '',
        resume_id: resumeId,
        job_description: '',
      };
      return await analyse(payload);
    },
    placeholderData: (prev) => prev,
    staleTime: Infinity,
    enabled: !!resumeId,
  });
};

// mutations
export const useUploadMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: upload,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['resume'] });
      toast.success("Resume Uploaded successfully!");
    },
    onError: (error: Error) => {
      console.log(error);
      toast.error(error?.message ?? "Resume Upload failed. Please try again.");
    },
  });
};

export const useAnalyseResumeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: analyse,
    onSuccess: (data, variables) => {
      queryClient.setQueryData(['resume-data', variables.resume_id], data);
      toast.success("Resume Analysis success!");
    },
    onError: (error: Error) => {
      console.log(error);
      toast.error(error?.message ?? "Resume Analysis Failed.");
    },
  });
};
