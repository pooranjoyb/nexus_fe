"use client";

import React, {
  createContext,
  useMemo,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { User } from "@/app/types/user";

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
  loading: boolean; 
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserFromLocalStorage = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Error fetching user from localStorage:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserFromLocalStorage();
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const logout = useMemo(
    () => () => {
      setUser(null);
    },
    []
  );

  const authContextValue = useMemo(
    () => ({
      user,
      setUser,
      logout,
      loading
    }),
    [user, setUser, logout, loading]
  );
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};