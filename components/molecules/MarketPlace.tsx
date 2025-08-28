"use client";
import { PropertyCard } from "@/components/cards/PropertyCard";
import { propertiesData } from "@/utils/propertiesData";
import { MapView } from "@/components/molecules/MapView";
import { PropertyProps } from "@/types/property";
import { Search, MapPin } from "lucide-react";
import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function MarketPlace() {
  const [selectedProperty, setSelectedProperty] =
    useState<PropertyProps | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Find your dream apartment
            </h1>
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-900 font-medium">
                Buy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Rent
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Sell
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Realtor
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col-reverse space-x-0 items-start  space-y-2 md:space-y-0 md:flex-row md:items-center md:space-x-4">
            {/* Home Type Dropdown */}
            <div className="space-y-2">
              <Select
              // value={formData.propertyType}
              // onValueChange={(val) => handleChange("propertyType", val)}
              >
                <SelectTrigger className="py-5 cursor-pointer w-[200px]">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HOUSE">House</SelectItem>
                  <SelectItem value="CONDO">Condo</SelectItem>
                  <SelectItem value="TOWNHOUSE">Town House</SelectItem>
                  <SelectItem value="SINGLE_FAMILY">Single Family</SelectItem>
                  <SelectItem value="MULTI_FAMILY">Multi Family</SelectItem>
                  <SelectItem value="APARTMENT">Apartment</SelectItem>
                  <SelectItem value="COMMERCIAL">Commercial</SelectItem>
                  <SelectItem value="LAND">Land</SelectItem>
                  <SelectItem value="VILLA">Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price Range Dropdown */}
            <div className="space-y-2">
              <Select
              // value={formData.propertyType}
              // onValueChange={(val) => handleChange("propertyType", val)}
              >
                <SelectTrigger className="py-5 cursor-pointer">
                  <SelectValue placeholder="₦100 000 - ₦500 000" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HOUSE">₦100 000 - ₦500 000</SelectItem>
                  <SelectItem value="CONDO">₦600 000 - ₦1,000 000</SelectItem>
                  <SelectItem value="TOWNHOUSE">₦1.5M - ₦3M</SelectItem>
                  <SelectItem value="TOWNHOUSE">₦5M - ₦10M</SelectItem>
                  <SelectItem value="TOWNHOUSE">₦20M - ₦50M</SelectItem>
                  <SelectItem value="TOWNHOUSE">₦100M - ₦300M</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location Input */}
            <div className="relative flex-1 max-w-md">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                onChange={(e) => console.log(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-transparent"
                placeholder="Enter location"
              />
            </div>
            {/* Search Button */}
            <button className="cursor-pointer hidden md:block bg-black text-white p-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Property Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {propertiesData.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="relative">
            <div className="sticky top-8">
              <div
                className="bg-gray-100 rounded-lg overflow-hidden"
                style={{ height: "600px" }}
              >
                {/* Map Background */}
                <div
                  className="w-full h-full relative bg-cover bg-center"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
                  }}
                >
                  {/* Street Labels */}
                  <div className="absolute top-4 left-4 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow">
                    Torrance Blvd
                  </div>
                  <div className="absolute bottom-20 right-8 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow">
                    Avenue E
                  </div>
                  <div className="absolute top-1/2 left-2 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow transform -rotate-90">
                    International Ave
                  </div>
                  {/* Neighborhood Labels */}
                  <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700 bg-white px-3 py-1 rounded-full shadow">
                    CLIFTON
                  </div>
                  {/* Property Pins */}
                  {propertiesData.map((property) => (
                    <MapView
                      key={property.id}
                      property={property}
                      isSelected={selectedProperty?.id === property.id}
                      onClick={setSelectedProperty}
                    />
                  ))}
                  {/* Water/Ocean areas */}
                  <div className="absolute top-0 left-0 w-1/4 h-2/3 bg-blue-200 opacity-50"></div>
                  <div className="absolute top-2/3 right-0 w-1/3 h-1/3 bg-green-200 opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
