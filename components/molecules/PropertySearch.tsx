import RealEstateFour from "@/public/assets/real-estate-4.jpg";
import RealEstateOne from "@/public/assets/real-estate.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PropertySearch() {
  const properties = [
    {
      id: 1,
      title: "123 Oak Avenue, Springfield",
      price: "$350,000",
      beds: 3,
      baths: 2.5,
      area: "1800 sqft",
      tags: ["Garage", "New Build", "Smart Home"],
      image: RealEstateOne,
    },
    {
      id: 2,
      title: "101 Cedar Lane, Lakeview",
      price: "$620,000",
      beds: 5,
      baths: 4,
      area: "3200 sqft",
      tags: ["Swimming Pool", "Gated Community"],
      image: RealEstateFour,
    },
  ];

  return (
    <div className="py-6 space-y-8">
      {/* Search Bar */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search by address, city, or ZIP code..."
          className="flex-1 border rounded-lg px-4 py-2"
        />
        <Button>Search</Button>
        <Button variant="outline" className="hidden md:block">
          Filter
        </Button>
      </div>
      {/* AI Recommended Properties */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          AI Recommended Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {properties.map((item) => (
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
      </div>
    </div>
  );
}
