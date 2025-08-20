import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { auth } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  return (
    <main className="min-h-screen p-6 pt-24 lg:p-12 xl:p-20 lg:pt-32 xl:pt-32 font-sans text-md">
      <div className="w-full font-sans text-md ">
        <p className="text-2xl font-bold mb-2">Dashboard</p>
        <p className="text-gray-500">Manage the Dashboard of your account</p>
      </div>
      {/* <section className="h-fit border mt-8 p-6 rounded-md">
        <Dashboard token={token} userId={userId} />
      </section> */}
    </main>
  );
}
