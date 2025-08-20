import { TbDeviceTvOld } from "react-icons/tb";
import { PiFilmReelFill } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { CircleCheck } from "lucide-react";
import livingRoom from "@/public/assets/living-rooms-large.jpeg";
import Kitchens from "@/public/assets/kitchen-large.jpeg";
import Bedroom from "@/public/assets/bedrooms-large.jpeg";
import Apartment from "@/public/assets/apartments-large.jpeg";
import OutdoorParty from "@/public/assets/outdoor-party-large.jpeg";
import Photoshoot from "@/public/assets/studio-large.jpeg";
import TrainingSpace from "@/public/assets/training-space-large.jpeg";
import FashioShow from "@/public/assets/fashion-large.jpeg";
import Neflix from "@/public/assets/netflix-large.png";
import Ebony from "@/public/assets/ebonylife-large.png";
import Nollywood from "@/public/assets/nollywood-gists-large.png";
import TechMobile from "@/public/assets/tecnomobile-large.png";
import PrimeVideo from "@/public/assets/prime-video-large.png";
import Disney from "@/public/assets/disney-large.png";


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
    title: "Bedrooms",
    locationNumber: "248+ Locations",
    imageUrl: Bedroom,
  },
  {
    id: 4,
    title: "Apartments",
    locationNumber: "248+ Locations",
    imageUrl: Apartment,
  },
];

export const topTierData = [
  {
    id: 1,
    title: "Outdoor Party",
    locationNumber: "248+ Locations",
    imageUrl: OutdoorParty,
  },
  {
    id: 2,
    title: "Photoshoot",
    locationNumber: "248+ Locations",
    imageUrl: Photoshoot,
  },
  {
    id: 3,
    title: "Training Spaces",
    locationNumber: "248+ Locations",
    imageUrl: TrainingSpace,
  },
  {
    id: 4,
    title: "Fashion Show",
    locationNumber: "248+ Locations",
    imageUrl: FashioShow,
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

export const productionData = [
  {
    id: 1,
    title: "Movie Production",
    content:
      "Big budget productions shoot over multiple days and require larger crews. They also pay the best and give you the best chance to spot an A-lister.",
    icon: <TbDeviceTvOld className="size-10" />,
  },
  {
    id: 2,
    title: "Events",
    content:
      "Photoshoots are short, simple and low impact. They typically last a few hours and include a cast and crew of less than 15 people.",
    icon: <PiFilmReelFill className="size-10" />,
  },
  {
    id: 3,
    title: "Photoshoot",
    content:
      "Photoshoots are short, simple and low impact. They typically last a few hours and include a cast and crew of less than 15 people.",
    icon: <IoHome className="size-10" />,
  },
];

export const recentShotData = [
  {
    id: 1,
    title: "Netflix Brand Logo",
    imageUrl: Neflix,
  },
  {
    id: 2,
    title: "Ebony Life Brand Logo",
    imageUrl: Ebony,
  },
  {
    id: 3,
    title: "Nollywood Gist Brand Logo",
    imageUrl: Nollywood,
  },
  {
    id: 4,
    title: "TecnoMobile Brand Logo",
    imageUrl: TechMobile,
  },
  {
    id: 5,
    title: "Prime Video Brand Logo",
    imageUrl: PrimeVideo,
  },
  {
    id: 6,
    title: "Disney Brand Logo",
    imageUrl: Disney,
  },
];

export const gotCoveredData = [
  {
    id: 1,
    title: "Host Liability Insurance",
    content:
      "We provide coverage for general liability claims up to $10,000. Feel secure knowing that coverage exists in qualifying circumstances.",
    icon: <CircleCheck size={32} color="#06884A" />,
  },
  {
    id: 2,
    title: "Property Damage Guarantee",
    content:
      "We provide coverage for general liability claims up to $10,000. Feel secure knowing that coverage exists in qualifying circumstances.",
    icon: <CircleCheck size={32} color="#06884A" />,
  },
  {
    id: 3,
    title: "Trust & Safety",
    content:
      "We work behind the scene to minimize booking risk and create peace of mind.",
    icon: <CircleCheck size={32} color="#06884A" />,
  },
];

export const spaceDownTimeData = [
  {
    id: 1,
    title: "Movie",
    totalNumber: "2,468",
  },
  {
    id: 2,
    title: "Photoshoot",
    totalNumber: "2,468",
  },
  {
    id: 3,
    title: "Outdoor Party",
    totalNumber: "2,468",
  },
  {
    id: 4,
    title: "Fashion Show",
    totalNumber: "2,468",
  },
  {
    id: 5,
    title: "And thousands of others",
    totalNumber: "",
  },
];

export const helpCenterData = [
  {
    id: 1,
    title: "Hosts",
    content:
      "Essential information for hosts  on how to add and book their spaces through our platform.",
  },
  {
    id: 2,
    title: "Guests",
    content:
      "Essential information for guests on how to add and book their spaces through our platform.",
  },
  {
    id: 3,
    title: "Trust and Safety",
    content:
      "Ensuring your security and peace of mind with every interaction. Your safety is our top priority.",
  },
];
