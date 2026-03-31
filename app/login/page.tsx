import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import DashboardHome from "@/components/dashboard/DashboardHome";

export default async function DashboardPage() {

  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return <DashboardHome />;
}