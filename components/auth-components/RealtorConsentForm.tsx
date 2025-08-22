"use client";
import BrandLogo from "@/public/assets/alive-home-logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
import {
  createRealtorRequest,
  uploadDocumentsRequest,
} from "@/app/services/users-service/realtor.request";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function RealtorConsentForm() {
  const { data: session } = useSession();
  const token = session?.user?.token as string;
  const userId = session?.user?.id as string;
  const router = useRouter();

  const [formData, setFormData] = useState({
    licenseNumber: "",
    brokerageName: "",
    yearsOfExperience: "",
    specialties: [] as string[],
    certifications: [] as string[],
    verificationDocsUrls: [] as string[],
  });
  const [files, setFiles] = useState<File[]>([]);
  const [specialtyInput, setSpecialtyInput] = useState("");
  const [certInput, setCertInput] = useState("");

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const addSpecialty = () => {
    if (specialtyInput.trim()) {
      handleChange("specialties", [
        ...formData.specialties,
        specialtyInput.trim(),
      ]);
      setSpecialtyInput("");
    }
  };

  const addCertification = () => {
    if (certInput.trim()) {
      handleChange("certifications", [
        ...formData.certifications,
        certInput.trim(),
      ]);
      setCertInput("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let uploadedUrls: string[] = [];
      if (files.length > 0) {
        const formDataUpload = new FormData();
        files.forEach((file) =>
          formDataUpload.append("verificationDocsUrls", file)
        );

        const response = await uploadDocumentsRequest(
          formDataUpload,
          token,
          userId
        );
        if (!response) {
          toast.error("Failed to upload documents");
          throw new Error("Failed to upload documents");
        }
        uploadedUrls = response.map((doc: any) => doc.url);
      }

      const payload = {
        ...formData,
        yearsOfExperience: Number(formData.yearsOfExperience),
        verificationDocsUrls: uploadedUrls,
        userId,
      };
      const response = await createRealtorRequest(payload, token);
      console.log("Response:", response);

      if (!response) {
        toast.error("Failed to create Profile");
        throw new Error("Failed to create Profile");
      }
      toast.success("Profile created successfully!");
      router.push("/realtor");
    } catch (error: any) {
      const apiError = error?.response?.data?.error;
      toast.error(apiError || "Failed to save profile. Please try again.");
    }
  };

  return (
    <div>
      <Link href="/" className="flex items-center relative w-20 h-10">
        <Image
          src={BrandLogo}
          alt="Alive Homes brand logo"
          width={100}
          height={100}
          priority
          className="object-contain absolute"
        />
      </Link>
      <div className="max-w-[540px] mx-auto mt-10">
        <div className="mb-6">
          <p className="text-[24px] text-[#141414] font-bold">
            Realtor Consent Form
          </p>
          <p className="text-[#7C8898]">
            Please provide your company details to complete your realtor
            profile.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* License Number */}
          <div className="space-y-2">
            <Label htmlFor="license">License Number</Label>
            <Input
              id="license"
              type="text"
              value={formData.licenseNumber}
              onChange={(e) => handleChange("licenseNumber", e.target.value)}
            />
          </div>

          {/* Brokerage Name */}
          <div className="space-y-2">
            <Label htmlFor="brokerage">Brokerage Name</Label>
            <Input
              id="brokerage"
              type="text"
              value={formData.brokerageName}
              onChange={(e) => handleChange("brokerageName", e.target.value)}
            />
          </div>

          {/* Years of Experience */}
          <div className="space-y-2">
            <Label htmlFor="experience">Years of Experience</Label>
            <Input
              id="experience"
              type="number"
              value={formData.yearsOfExperience}
              onChange={(e) =>
                handleChange("yearsOfExperience", e.target.value)
              }
            />
          </div>

          {/* Specialties */}
          <div className="space-y-2">
            <Label htmlFor="specialties">Specialties</Label>
            <div className="flex gap-2">
              <Input
                id="specialties"
                type="text"
                value={specialtyInput}
                onChange={(e) => setSpecialtyInput(e.target.value)}
              />
              <Button
                type="button"
                onClick={addSpecialty}
                className="cursor-pointer"
              >
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.specialties.map((item, idx) => (
                <span key={idx} className="bg-gray-200 px-2 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <Label htmlFor="certifications">Certifications</Label>
            <div className="flex gap-2">
              <Input
                id="certifications"
                type="text"
                value={certInput}
                onChange={(e) => setCertInput(e.target.value)}
              />
              <Button
                type="button"
                onClick={addCertification}
                className="cursor-pointer"
              >
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.certifications.map((item, idx) => (
                <span key={idx} className="bg-gray-200 px-2 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Upload Verification Docs */}
          <div className="space-y-2">
            <Label htmlFor="docs">Verification Documents</Label>
            <Input id="docs" type="file" multiple onChange={handleFileChange} />
            {files.length > 0 && (
              <p className="text-sm text-gray-500">
                {files.length} file(s) selected
              </p>
            )}
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full cursor-pointer">
            Save Realtor Profile
          </Button>
        </form>
      </div>
    </div>
  );
}
