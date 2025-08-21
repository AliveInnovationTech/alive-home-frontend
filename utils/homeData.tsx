import livingRoom from "@/public/assets/living-rooms-large.jpeg";
import Kitchens from "@/public/assets/kitchen-large.jpeg";
import Apartment from "@/public/assets/apartments-large.jpeg";
import { TbDeviceTvOld } from "react-icons/tb";
import { PiFilmReelFill } from "react-icons/pi";
import { IoHome } from "react-icons/io5";

export const exploreData = [
  {
    id: 1,
    title: "Living Rooms",
    locationNumber: "248+ Locations",
    imageUrl: livingRoom,
  },
  {
    id: 2,
    title: "Kitchens",
    locationNumber: "248+ Locations",
    imageUrl: Kitchens,
  },
  {
    id: 3,
    title: "livingRoom",
    locationNumber: "248+ Locations",
    imageUrl: livingRoom,
  },
  {
    id: 4,
    title: "Apartments",
    locationNumber: "248+ Locations",
    imageUrl: Apartment,
  },
];

export const processData = [
  {
    id: 1,
    title: "Explore Filming Sites",
    content:
      "Discover a wide selection of film-friendly homes. Engage with homeowners to find your ideal filming location.",
    icon: <TbDeviceTvOld className="size-10" />,
  },
  {
    id: 2,
    title: "Visit & Inspect",
    content:
      "Tour the location before making a decision. Confirm that the space meets your production requirements and creative vision.",
    icon: <PiFilmReelFill className="size-10" />,
  },
  {
    id: 3,
    title: "Reserve and Film",
    content:
      "Reserve your spot online. We handle all payments, additional charges, security deposits, and more.",
    icon: <IoHome className="size-10" />,
  },
];
