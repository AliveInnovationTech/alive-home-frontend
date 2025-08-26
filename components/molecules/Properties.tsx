"use client";
import { getPropertiesRequest } from "@/app/services/property-service/property.service";
import { PropertyCardSkeleton } from "@/components/skeletons/PropertySkeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Modal } from "@/components/modals/Modal";
import CreateProperty from "./CreateProperty";
import { useSession } from "next-auth/react";
import Trash from "@/components/trash/Trash";
import { useState } from "react";
import Image from "next/image";

export default function Properties() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { data: session } = useSession();
  const token = session?.user?.token as string;

  // Fetch Properties Data
  const { data: getProperties, isLoading } = useQuery<any>({
    queryKey: ["getProperties"],
    queryFn: async () => await getPropertiesRequest(token),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: true,
  });
  const propertiesData = getProperties?.data || null;

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <div className="w-full flex items-center justify-between font-sans text-md ">
        <div className="w-full font-sans text-md ">
          <p className="text-2xl font-bold mb-2">Property</p>
          <p className="text-gray-500">Manage the Property of here</p>
        </div>
        <Button onClick={() => toggleChat()} className="">
          Add Property
        </Button>
      </div>
      <div className="py-6 space-y-8">
        {/* Search Bar */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by area, title, beds, baths, price, tags..."
            className="flex-1 border rounded-lg px-4 py-2"
          />
          <Button>Search</Button>
          <Button variant="outline" className="hidden md:block">
            Filter
          </Button>
        </div>
        {/* ====== Recommended Properties====== */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recommended Properties</h2>
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 6 }).map((_, idx) => (
                <PropertyCardSkeleton key={idx} />
              ))}
            </div>
          )}
          {propertiesData?.length === 0 ? (
            <div className="gap-2 my-6">
              <Trash
                headingText="No Property"
                subHeadingText="No Property have been received yet. Check back later."
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {propertiesData?.map((item: any) => {
                const mainImage =
                  item.media?.find((m: any) => m.isMainImage)?.cloudinaryUrl ||
                  "/placeholder.jpg";
                return (
                  <Card
                    key={item.propertyId}
                    className="overflow-hidden shadow-lg"
                  >
                    <Image
                      src={mainImage}
                      width={300}
                      height={200}
                      alt={item.title}
                      className="w-full h-50 object-cover -mt-6"
                    />
                    <CardContent className="p-4 space-y-2">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-green-600 font-bold">
                        ₦{Number(item.price).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.bedrooms} Beds • {item.bathrooms} Baths •{" "}
                        {item.squareFeet.toLocaleString()} sqft
                      </p>
                      {item.features && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.features
                            .split(",")
                            .map((feature: string, idx: number) => (
                              <span
                                key={idx}
                                className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                              >
                                {feature.trim()}
                              </span>
                            ))}
                        </div>
                      )}
                      <Button className="w-full mt-3">View Details</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* === MODALS === */}
      <Modal show={isChatOpen} onClose={() => setIsChatOpen(false)}>
        <CreateProperty toggleChat={toggleChat} />
      </Modal>
    </>
  );
}
