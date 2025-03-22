"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/hooks/useSession";

export default function LayoutPage() {
  const router = useRouter();
  const data = useSession();

  useEffect(() => {
    if (!data?.user) {
      router.replace("/auth/login");
    } else {
      router.replace("/dashboard");
    }
  }, [data?.user, router]);

  return null;
}
