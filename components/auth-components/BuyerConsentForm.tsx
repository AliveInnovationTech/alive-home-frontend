"use client";
import { createBuyerRequest } from "@/app/services/users-service/buyers.request";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function BuyerConsentForm() {
  const { data: session } = useSession();
  const token = session?.user?.token as string;
  const userId = session?.user?.id as string;
  const router = useRouter();

  console.log("User ID is here:", userId);
  console.log("User token is here:", token);
  console.log("User session is here:", session);

  const [formData, setFormData] = useState({
    minimumBudget: "",
    maximumBudget: "",
    preApproved: false,
    preApprovalAmount: "",
    preferredLocations: [],
    propertyType: "",
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = { ...formData, userId };
      const response = await createBuyerRequest(payload, token);

      toast.success("Preferences saved successfully!");
      console.log("Response:", response);
      localStorage.setItem("consentForm", "false");

      // Redirect after completion
      router.push("/buyer");
    } catch (error: any) {
      const apiError = error?.response?.data?.error;
      const status = error?.response?.status;

      if (status === 409 && apiError === "User already has a buyer profile") {
        localStorage.setItem("consentForm", "false");
        router.push("/buyer");
        return;
      }
      console.error("Error saving preferences:", apiError || error.message);
      toast.error(apiError || "Failed to save preferences. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Budget */}
            <div className="space-y-2">
              <Label htmlFor="minBudget">Minimum Budget</Label>
              <Input
                id="minBudget"
                type="number"
                value={formData.minimumBudget}
                onChange={(e) =>
                  handleChange("minimumBudget", Number(e.target.value))
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxBudget">Maximum Budget</Label>
              <Input
                id="maxBudget"
                type="number"
                value={formData.maximumBudget}
                onChange={(e) =>
                  handleChange("maximumBudget", Number(e.target.value))
                }
              />
            </div>

            {/* Pre-Approval */}
            <div className="flex items-center justify-between">
              <Label htmlFor="preApproved">Pre-Approved</Label>
              <Switch
                id="preApproved"
                checked={formData.preApproved}
                onCheckedChange={(val) => handleChange("preApproved", val)}
              />
            </div>

            {formData.preApproved && (
              <div className="space-y-2">
                <Label htmlFor="approvalAmount">Pre-Approval Amount</Label>
                <Input
                  id="approvalAmount"
                  type="number"
                  value={formData.preApprovalAmount}
                  onChange={(e) =>
                    handleChange("preApprovalAmount", Number(e.target.value))
                  }
                />
              </div>
            )}

            {/* Preferred Locations */}
            <div className="space-y-2">
              <Label htmlFor="locations">Preferred Locations</Label>
              <Input
                id="locations"
                placeholder="Enter comma-separated locations"
                value={formData.preferredLocations.join(", ")}
                onChange={(e) =>
                  handleChange(
                    "preferredLocations",
                    e.target.value.split(",").map((loc) => loc.trim())
                  )
                }
              />
              <p className="text-sm text-gray-500">
                Example: Lagos, Abuja, Edo, PH
              </p>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <Label>Property Type</Label>
              <Select
                value={formData.propertyType}
                onValueChange={(val) => handleChange("propertyType", val)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HOUSE">House</SelectItem>
                  <SelectItem value="CONDO">Condo</SelectItem>
                  <SelectItem value="TOWNHOUSE">Town House</SelectItem>
                  <SelectItem value="MULTIFAMILY">Multi Family</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full">
              Save Preferences
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
