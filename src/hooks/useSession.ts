"use client"; 

import { User } from "@/app/types/user";
import { useEffect, useState } from "react";

export const useSession = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
      setIsLoading(false);
    }
  }, []);

  return { user, isLoading };
};
