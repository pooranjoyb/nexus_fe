"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <p>Loading session...</p>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Welcome, {user?.user?.email}</h1>
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </div>
  );
};

export default Dashboard;
