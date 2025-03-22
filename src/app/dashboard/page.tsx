import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};
const Dashboard = async () => {

  return (
    <div className="">
      <h1 className="text-xl font-bold">Welcome, 
        </h1>
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </div>
  );
};

export default Dashboard;
