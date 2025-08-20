import { PWAInstallPrompt } from "@/components/pwa-install/PWAInstallPrompt";
import SessionProviderPage from "@/app/providers/session-providers";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

const APP_NAME = "Alive ai";
const APP_DEFAULT_TITLE = "Alive ai";
const APP_TITLE_TEMPLATE = "%s | Alive ai";
const APP_DESCRIPTION =
  "Alive AI - Hire Africa’s Top 5% Remote Tech Talent Instantly";

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

export const viewport = {
  themeColor: "#cde3fa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProviderPage>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SessionProviderPage>
        <Toaster position="top-center" richColors={true} />
        <PWAInstallPrompt />
      </body>
    </html>
  );
}
