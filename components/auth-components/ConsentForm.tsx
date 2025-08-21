// import HomeOwnerConsentForm from "./HomeOwnerConsentForm";
import BuyerConsentForm from "./BuyerConsentForm";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function ConsentForm() {
  const session = await auth();
  const token = session?.user?.token as string;
  const role = session?.user?.role as string;
  if (!token || !role) {
    redirect("/login");
  }
  console.log("User role is here:", role);
  return (
    <div className="bg-[#FDFDFD] overflow-y-scroll w-full md:w-1/2 h-full pt-10 pb-20 px-6 lg:px-20">
      {/* {role === "HOMEOWNER" && <HomeOwnerConsentForm />} */}
      {role === "BUYER" && <BuyerConsentForm />}
      {role === "REALTOR" && <BuyerConsentForm />}
      {role === "DEVELOPER" && <BuyerConsentForm />}
    </div>
  );
}
