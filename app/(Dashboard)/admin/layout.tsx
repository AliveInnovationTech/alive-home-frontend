import { AdminSidebar } from "@/components/sidebar/AdminSidebar";
import BottomNavBar from "@/components/navbar/BottomNavBar";
import AdminNavBar from "@/components/navbar/AdminNavBar";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import { auth } from "@/auth";

const APP_NAME = "Alive homes ai";
const APP_DEFAULT_TITLE = "Alive homes ai | Talent";
const APP_TITLE_TEMPLATE = "%s - Alive homes ai";
const APP_DESCRIPTION =
  "Alive homes AI - Hire Africa’s Top 5% Remote Tech Talent Instantly";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
  formatDetection: {
    telephone: false,
  },
};

export default async function StudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <AdminNavBar session={session} />
      <div className="flex flex-col space-y-6 bg-[#F7FAFE] text-[#414242]">
        <div className="grid flex-1 gap-12">
          <div className="hidden w-[200px] md:w-[160px] lg:w-[210px] xl:w-[240px] fixed flex-col lg:block bg-white border-r border-slate-100 pl-6 pr-2 lg:pl-10 pt-32 min-h-screen">
            <AdminSidebar session={session} />
          </div>
          <main className="lg:pl-48 xl:pl-52 xl:pr-6 overflow-x-auto pb-28 md:pb-10 mt-6">
            {children}
          </main>
          <BottomNavBar />
        </div>
      </div>
    </div>
  );
}
