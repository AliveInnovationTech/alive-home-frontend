// import OverviewHome from "@/app/components/student-components/OverviewHome";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Overview | Afren ai",
  description: "Afren AI - AI-driven real estate technology platform",
};
export default async function OverviewPage() {
  const session = await auth();
  const token = session?.user?.token;
  const userId = session?.user?.id;
  if (!session?.user || !token || !userId) {
    redirect("/login");
  }
  return (
    <main className="min-h-screen p-6 pt-24 lg:p-12 xl:p-20 lg:pt-32 xl:pt-32 font-sans text-md">
      {/* <OverviewHome token={token} userId={userId} /> */}
    </main>
  );
}
