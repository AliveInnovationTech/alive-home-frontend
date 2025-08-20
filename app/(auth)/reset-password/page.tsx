import ResetPassword from "@/components/auth-components/ResetPassword";
import RightContainer from "@/components/auth-components/RightContainer";

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const resetPasswordToken = searchParams?.resetToken;
  return (
    <div className="text-[#414242] md:flex justify-between h-screen overflow-y-hidden">
      <ResetPassword token={resetPasswordToken} />
      <RightContainer />
    </div>
  );
}
