import { useMutation } from "@tanstack/react-query";
import { User } from "@/app/types/user";
import toast from "react-hot-toast";
import axiosInstance from "@/helpers/axiosInstance";
import axios, { AxiosError } from "axios";

// apis
const login = async (payload: {
  username: string;
  password: string;
}): Promise<User> => {
  try {
    const { data } = await axiosInstance.post<User>("/auth/login", payload);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.log(
        "Login error:",
        axiosError.response?.data ?? axiosError.message
      );
      throw axiosError;
    } else {
      console.log("Login error:", error);
      throw new Error("Login failed");
    }
  }
};

const register = async (payload: {
  username: string;
  password: string;
}): Promise<User> => {
  try {
    const { data } = await axiosInstance.post<User>("/auth/register", payload);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.log(
        "Register error:",
        axiosError.response?.data ?? axiosError.message
      );
      throw axiosError;
    } else {
      console.log("Register error:", error);
      throw new Error("Registration failed");
    }
  }
};

// mutations
export const useLoginMutation = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Logged in successfully!");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data as { msg?: string };
        toast.error(
          responseData.msg ?? "Login failed. Please try again."
        );
      } else {
        toast.error("Login failed. Please try again.");
      }
    },
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success(
        "User registered successfully! Please Login with your credentials."
      );
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        const responseData = axiosError.response?.data as { msg?: string };
        toast.error(
          responseData.msg ?? "User registration failed. Please try again."
        );
      } else {
        toast.error("User registration failed. Please try again.");
      }
    },
  });
};
