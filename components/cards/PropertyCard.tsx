"use client";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { PropertyCardProps } from "@/types/property";
import { formatPrice } from "@/utils/utils";
import Image from "next/image";

export const PropertyCard = ({ property, isMapView = false }: PropertyCardProps) => (
  <div
    className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
      isMapView && "w-80"
    }`}
  >
    <div className="relative">
      <Image
        src={property.image as string}
        alt={property.address as string}
        width={100}
        height={100}
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="p-4">
      <div className="text-2xl font-bold text-gray-900 mb-2">
        {formatPrice(property.price)}
      </div>
      <div className="flex items-center text-gray-600 mb-3">
        <MapPin className="w-4 h-4 mr-1" />
        <span className="text-sm">{property.address}</span>
      </div>
      <div className="flex items-center text-sm text-gray-600 space-x-4">
        <div className="flex items-center">
          <Bed className="w-4 h-4 mr-1" />
          <span>{property.beds} beds</span>
        </div>
        <div className="flex items-center">
          <Bath className="w-4 h-4 mr-1" />
          <span>{property.baths} baths</span>
        </div>
        <div className="flex items-center">
          <Square className="w-4 h-4 mr-1" />
          <span>{property.sqft} sqft</span>
        </div>
      </div>
      {property.type && (
        <div className="text-sm text-gray-500 mt-2">{property.type}</div>
      )}
    </div>
  </div>
);
