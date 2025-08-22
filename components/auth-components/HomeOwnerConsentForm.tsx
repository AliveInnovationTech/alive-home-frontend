"use client";
import BrandLogo from "@/public/assets/alive-home-logo.png";
import {
  createHomeOwnerRequest,
  uploadDocumentsRequest,
} from "@/app/services/users-service/homeowner.request";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeOwnerConsentForm() {
  const { data: session } = useSession();
  const token = session?.user?.token as string;
  const userId = session?.user?.id as string;
  const router = useRouter();

  const [formData, setFormData] = useState({
    primaryResidence: "",
    ownershipVerified: false,
    preferredContactMethod: "EMAIL",
    verificationDocsUrls: [] as string[],
  });
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
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
        verificationDocsUrls: uploadedUrls,
        userId,
      };

      console.log("Final Payload:", payload);

      const response = await createHomeOwnerRequest(payload, token);
      console.log("Response:", response);

      if (!response) {
        toast.error("Failed to create Profile");
        throw new Error("Failed to create Profile");
      }
      toast.success("Profile created successfully!");
      router.push("/developer");
    } catch (error: any) {
      const apiError = error?.response?.data?.error;
      console.error("Error saving preferences:", apiError || error.message);
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
            Home Owner Consent Form
          </p>
          <p className="text-[#7C8898]">
            Please provide your Information to complete your profile.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Primary Residence */}
          <div className="space-y-2">
            <Label htmlFor="residence">Primary Residence</Label>
            <Input
              id="residence"
              type="text"
              value={formData.primaryResidence}
              onChange={(e) => handleChange("primaryResidence", e.target.value)}
            />
          </div>

          {/* Ownership Verification */}
          <div className="flex items-center justify-between">
            <Label htmlFor="ownership">Ownership Verified</Label>
            <Switch
              id="ownership"
              checked={formData.ownershipVerified}
              onCheckedChange={(val) => handleChange("ownershipVerified", val)}
              className="cursor-pointer"
            />
          </div>

          {/* Contact Method */}
          <div className="space-y-2">
            <Label>Preferred Contact Method</Label>
            <Select
              value={formData.preferredContactMethod}
              onValueChange={(val) =>
                handleChange("preferredContactMethod", val)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select contact method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EMAIL">Email</SelectItem>
                <SelectItem value="PHONE">Phone</SelectItem>
                <SelectItem value="SMS">SMS</SelectItem>
              </SelectContent>
            </Select>
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
            Save Now
          </Button>
        </form>
      </div>
    </div>
  );
}
