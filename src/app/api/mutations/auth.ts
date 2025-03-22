import { useMutation } from "@tanstack/react-query";
import { User } from "@/app/types/user";
import toast from "react-hot-toast";
import axiosInstance from "@/helpers/axiosInstance";

const login = async (payload: { username: string; password: string }): Promise<User> => {
  try {
    const { data } = await axiosInstance.post<User>("/auth/login", payload);
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch {
    console.error("Login error:");
    throw new Error("Login failed");
  }
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Logged in successfully!");
    },
    onError: (error) => {
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.");
    },
  });
};

export { login };
