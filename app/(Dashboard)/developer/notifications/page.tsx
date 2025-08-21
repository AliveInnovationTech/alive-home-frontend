// import Notification from "@/app/components/student-components/Notifications";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { auth } from "@/auth";
import Trash from "@/components/trash/Trash";

export const metadata: Metadata = {
  title: "Notifications | Alive Homes",
  description: "Alive Homes - AI-driven real estate technology platform",
};

export default async function NotificationPage() {
  const session = await auth();
  const token = session?.user?.token;
  if (!session?.user || !token) {
    redirect("/login");
  }
  return (
    <main className="min-h-screen p-6 pt-24 lg:p-12 xl:p-20 lg:pt-32 xl:pt-32 font-sans text-md">
      <div className="w-full font-sans text-md ">
        <p className="text-2xl font-bold mb-2">Notification</p>
        <p className="max-w-[550px] leading-8 font-light">
          Stay updated with real-time notifications on application requests.
          Geomatic Connect keeps you informed and engaged throughout your
          training journey. All alerts are personalized and available anytime in
          your dashboard.
        </p>
      </div>
      <div className="gap-2 my-6">
        <Trash
          headingText="Start Adding Users"
          subHeadingText="No users have been added yet. Click the 'Add User' button above to create a new user."
        />
      </div>
    </main>
  );
}
