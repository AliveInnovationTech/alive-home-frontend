"use client";
import {
  createHomeOwnerRequest,
  uploadDocumentsRequest,
} from "@/app/services/users-service/homeowner.request";
import { Card, CardContent } from "@/components/ui/card";
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

export default function HomeOwnerConsentForm() {
  const { data: session } = useSession();
  const token = session?.user?.token as string;
  const userId = session?.user?.id as string;
  
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
      localStorage.setItem("consentForm", "false");
      toast.success("Profile created successfully!");
    } catch (err: any) {
      console.error("Error submitting form:", err);
      if (err.response?.status === 409) {
        toast.error(err.response.data?.error || "Profile already exists");
      } else {
        toast.error("Failed to create profile. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Primary Residence */}
            <div className="space-y-2">
              <Label htmlFor="residence">Primary Residence</Label>
              <Input
                id="residence"
                type="text"
                value={formData.primaryResidence}
                onChange={(e) =>
                  handleChange("primaryResidence", e.target.value)
                }
              />
            </div>

            {/* Ownership Verification */}
            <div className="flex items-center justify-between">
              <Label htmlFor="ownership">Ownership Verified</Label>
              <Switch
                id="ownership"
                checked={formData.ownershipVerified}
                onCheckedChange={(val) =>
                  handleChange("ownershipVerified", val)
                }
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
              <Input
                id="docs"
                type="file"
                multiple
                onChange={handleFileChange}
              />
              {files.length > 0 && (
                <p className="text-sm text-gray-500">
                  {files.length} file(s) selected
                </p>
              )}
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full">
              Save Homeowner Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
