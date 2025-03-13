import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="">
      <h1 className="text-xl font-bold">Welcome, {session.user?.email}!</h1>
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </div>
  );
};

export default Dashboard;
