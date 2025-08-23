import { Card, CardContent } from "@/components/ui/card";
import { propertiesData } from "@/utils/propertiesData";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AiRecommendation() {
  return (
    <div className="py-6 space-y-8">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {propertiesData.slice(3, 5).map((item) => (
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
