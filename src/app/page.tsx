"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function LayoutPage() {
  const router = useRouter();
  const data = useAuth();

  useEffect(() => {
    if (!data?.user) {
      router.replace("/auth/login");
    } else {
      router.replace("/dashboard");
    }
  }, [data?.user, router]);

  return null;
}
