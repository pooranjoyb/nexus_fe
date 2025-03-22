import { redirect } from "next/navigation";

export default async function LayoutPage() {
  const session = "cnso"

  if(!session)
    redirect("/auth/login");
  else 
    redirect("/dashboard");
}
