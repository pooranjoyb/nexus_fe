import { getServerSession } from "next-auth";
import { authOptions } from "./utils/authOptions";
import { redirect } from "next/navigation";


export default async function LayoutPage() {
  const session = await getServerSession(authOptions);

  if(!session)
    redirect("/auth/login");
  else 
    redirect("/dashboard");
}
