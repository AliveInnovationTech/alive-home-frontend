import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Account | Afren ai",
  description: "Afren AI - Hire Africa’s Top 5% Remote Tech Talent Instantly",
};
export default async function AccountPage() {
  const session = await auth();
  const token = session?.user?.token;
  const userId = session?.user?.id;
  if (!session?.user || !token || !userId) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen p-6 pt-24 lg:p-12 xl:p-20 lg:pt-32 xl:pt-32 font-sans text-md">
      <div className="w-full font-sans text-md ">
        <p className="text-2xl font-bold mb-2">Account</p>
        <p className="text-gray-500">Manage the Account of your account</p>
      </div>
      {/* <section className="h-fit border mt-8 p-6 rounded-md">
        <Account token={token} userId={userId} />
      </section> */}
    </main>
  );
}
