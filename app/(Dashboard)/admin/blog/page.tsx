// import BlogHome from "@/app/components/student-components/BlogHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Afren ai",
  description: "Explore latest articles about afren ai",
};
export default async function BlogHomePage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between max-w-7xl mx-auto lg:p-12 xl:p-20 xl:px-2 xl:pl-12">
        <div className="w-full text-sm ">{/* <BlogHome /> */}</div>
      </main>
    </>
  );
}
