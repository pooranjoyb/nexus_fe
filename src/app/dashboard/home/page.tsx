import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Home page</h1>
    </div>
  );
}
