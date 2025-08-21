import {
  CreditCard,
  PencilLine,
  LayoutGrid,
  BriefcaseBusiness,
  MessageCircle,
  Award,
  Settings,
  ShieldMinus,
  User,
  Contact,
} from "lucide-react";
import { GoHome } from "react-icons/go";
import { MdOutlinePayment } from "react-icons/md";

export const adminNavItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutGrid,
  },
  {
    name: "Message",
    href: "/admin/message",
    icon: MessageCircle,
  },
  {
    name: "Property Search",
    href: "/admin/property-search",
    icon: BriefcaseBusiness,
  },
  {
    name: "Saved Properties",
    href: "/admin/saved-properties",
    icon: Award,
  },
  {
    name: "Notifications",
    href: "/admin/notifications",
    icon: CreditCard,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
    subLinks: [
      {
        name: "Account",
        href: "/admin/settings/account",
        icon: User,
      },
      {
        name: "Security",
        href: "/admin/settings/security",
        icon: ShieldMinus,
      },
      {
        name: "Feedback",
        href: "/admin/settings/feedback",
        icon: Contact,
      },
    ],
  },
];

// MobileLinks (Navbar)
export const adminMobileRoutes = [
  {
    name: "Dashboard",
    href: `/admin`,
  },

  {
    name: "Saved Properties",
    href: "/admin/saved-properties",
  },
  {
    name: "Settings",
    href: "/admin/settings/account",
  },
  {
    name: "Notifications",
    href: "/admin/notifications",
  },
];

// Admin Bottom Navbar Route Links
export const adminBottomRouteLinks = [
  {
    name: "Home",
    href: "",
    key: "home",
    icon: GoHome,
  },
  {
    name: "Properties",
    href: "/property-search",
    key: "properties",
    icon: MdOutlinePayment,
  },
  {
    name: "Saved",
    href: "/saved-properties",
    key: "saved-properties",
    icon: PencilLine,
  },
  {
    name: "Settings",
    href: "/settings/account",
    key: "settings",
    icon: Settings,
  },
];
