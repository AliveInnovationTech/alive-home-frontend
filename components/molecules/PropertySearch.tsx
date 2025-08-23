"use client";
import { Card, CardContent } from "@/components/ui/card";
import { propertiesData } from "@/utils/propertiesData";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function PropertySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);

  const handleSearch = () => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const results = propertiesData.filter((property) => {
      const { title, price, area, beds, baths, tags } = property;
      const combinedString = `
        ${title} 
        ${price} 
        ${area} 
        ${beds} 
        ${baths} 
        ${tags.join(" ")}
      `.toLowerCase();
      return combinedString.includes(lowerCaseTerm);
    });

    setFilteredProperties(results);
  };

  return (
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
        <Button onClick={handleSearch}>Search</Button>
        <Button variant="outline" className="hidden md:block">
          Filter
        </Button>
      </div>

      {/* Recommended Properties */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recommended Properties</h2>

        {filteredProperties.length === 0 ? (
          <p className="text-gray-500">No properties found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProperties.map((item) => (
              <Card key={item.id} className="overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  width={300}
                  height={300}
                  alt={item.title}
                  className="w-full h-50 object-cover -mt-6"
                />
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-green-600 font-bold">{item.price}</p>
                  <p className="text-sm text-gray-600">
                    {item.beds} Beds • {item.baths} Baths • {item.area}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full mt-3">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
