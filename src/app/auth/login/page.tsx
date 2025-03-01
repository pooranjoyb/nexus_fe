"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    localStorage.setItem("auth", "true");
    router.push("/dashboard");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded my-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded my-2"
      />
      <button className="p-2 bg-blue-500 text-white rounded" onClick={handleLogin}>
        Login
      </button>
      <p className="mt-2">
        Don&apos;t have an account? <a href="/auth/signup" className="text-blue-500">Sign up</a>
      </p>
    </div>
  );
}
