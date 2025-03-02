"use client";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup() {
    console.log("HEHEHEH");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Sign Up</h1>
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
      <button className="p-2 bg-green-500 text-white rounded" onClick={handleSignup}>
        Sign Up
      </button>
      <p className="mt-2">
        Already have an account? <a href="/auth/login" className="text-blue-500">Login</a>
      </p>
    </div>
  );
}
