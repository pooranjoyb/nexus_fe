import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function LayoutPage() {
  const session = await getServerSession(authOptions);

  if(!session)
    redirect("/auth/login");
  else 
    redirect("/dashboard");
}
