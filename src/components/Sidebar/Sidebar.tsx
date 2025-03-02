"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Sidebar() {

  async function handleLogout() {
    await signOut({ callbackUrl: "/auth/login" });
  }

  return (
    <aside className="w-64 bg-gray-900 text-white h-full p-4">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <nav className="mt-4">
        <ul>
          <li>
            <Link
              href="/dashboard"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/home"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="w-full mt-4 p-2 cursor-pointer bg-red-500 rounded"
      >
        Logout
      </button>
    </aside>
  );
}
