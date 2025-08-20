// import BlogDetails from "@/app/components/admin-components/BlogDetails";
import { redirect } from "next/navigation";
import { use } from "react";

export default function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const blogSlug = slug;
  console.log(blogSlug, "this is blogSlug here===");

  if (!blogSlug) {
    redirect("/blog");
  }
  return (
    <>
      <main className="min-h-screen px-6 pt-4 lg:p-12 xl:p-20">
        {/* <BlogDetails blogSlug={blogSlug} /> */}
      </main>
    </>
  );
}
