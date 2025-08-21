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

export const realtorNavItems = [
  {
    name: "Dashboard",
    href: "/realtor",
    icon: LayoutGrid,
  },
  {
    name: "Message",
    href: "/realtor/message",
    icon: MessageCircle,
  },
  {
    name: "Property Search",
    href: "/realtor/property-search",
    icon: BriefcaseBusiness,
  },
  {
    name: "Saved Properties",
    href: "/realtor/saved-properties",
    icon: Award,
  },
  {
    name: "Notifications",
    href: "/realtor/notifications",
    icon: CreditCard,
  },
  {
    name: "Settings",
    href: "/realtor/settings",
    icon: Settings,
    subLinks: [
      {
        name: "Account",
        href: "/realtor/settings/account",
        icon: User,
      },
      {
        name: "Security",
        href: "/realtor/settings/security",
        icon: ShieldMinus,
      },
      {
        name: "Feedback",
        href: "/realtor/settings/feedback",
        icon: Contact,
      },
    ],
  },
];

export const buyerNavItems = [
  {
    name: "Dashboard",
    href: "/buyer",
    icon: LayoutGrid,
  },
  {
    name: "Message",
    href: "/buyer/message",
    icon: MessageCircle,
  },
  {
    name: "Property Search",
    href: "/buyer/property-search",
    icon: BriefcaseBusiness,
  },
  {
    name: "Saved Properties",
    href: "/buyer/saved-properties",
    icon: Award,
  },
  {
    name: "Notifications",
    href: "/buyer/notifications",
    icon: CreditCard,
  },
  {
    name: "Settings",
    href: "/buyer/settings",
    icon: Settings,
    subLinks: [
      {
        name: "Account",
        href: "/buyer/settings/account",
        icon: User,
      },
      {
        name: "Security",
        href: "/buyer/settings/security",
        icon: ShieldMinus,
      },
      {
        name: "Feedback",
        href: "/buyer/settings/feedback",
        icon: Contact,
      },
    ],
  },
];

export const homeOwnerNavItems = [
  {
    name: "Dashboard",
    href: "/homeowner",
    icon: LayoutGrid,
  },
  {
    name: "Message",
    href: "/homeowner/message",
    icon: MessageCircle,
  },
  {
    name: "Property Search",
    href: "/homeowner/property-search",
    icon: BriefcaseBusiness,
  },
  {
    name: "Saved Properties",
    href: "/homeowner/saved-properties",
    icon: Award,
  },
  {
    name: "Notifications",
    href: "/homeowner/notifications",
    icon: CreditCard,
  },
  {
    name: "Settings",
    href: "/homeowner/settings",
    icon: Settings,
    subLinks: [
      {
        name: "Account",
        href: "/homeowner/settings/account",
        icon: User,
      },
      {
        name: "Security",
        href: "/homeowner/settings/security",
        icon: ShieldMinus,
      },
      {
        name: "Feedback",
        href: "/homeowner/settings/feedback",
        icon: Contact,
      },
    ],
  },
];

export const developerNavItems = [
  {
    name: "Dashboard",
    href: "/developer",
    icon: LayoutGrid,
  },
  {
    name: "Message",
    href: "/developer/message",
    icon: MessageCircle,
  },
  {
    name: "Property Search",
    href: "/developer/property-search",
    icon: BriefcaseBusiness,
  },
  {
    name: "Saved Properties",
    href: "/developer/saved-properties",
    icon: Award,
  },
  {
    name: "Notifications",
    href: "/developer/notifications",
    icon: CreditCard,
  },
  {
    name: "Settings",
    href: "/developer/settings",
    icon: Settings,
    subLinks: [
      {
        name: "Account",
        href: "/developer/settings/account",
        icon: User,
      },
      {
        name: "Security",
        href: "/developer/settings/security",
        icon: ShieldMinus,
      },
      {
        name: "Feedback",
        href: "/developer/settings/feedback",
        icon: Contact,
      },
    ],
  },
];

// MobileLinks (Navbar)
export const buyerMobileRoutes = [
  {
    name: "Dashboard",
    href: `/buyer`,
  },

  {
    name: "Saved Properties",
    href: "/buyer/saved-properties",
  },
  {
    name: "Settings",
    href: "/buyer/settings/account",
  },
  {
    name: "Notifications",
    href: "/buyer/notifications",
  },
];
export const realtorMobileRoutes = [
  {
    name: "Dashboard",
    href: `/realtor`,
  },

  {
    name: "Saved Properties",
    href: "/realtor/saved-properties",
  },
  {
    name: "Settings",
    href: "/realtor/settings/account",
  },
  {
    name: "Notifications",
    href: "/realtor/notifications",
  },
];
export const developerMobileRoutes = [
  {
    name: "Dashboard",
    href: `/developer`,
  },

  {
    name: "Saved Properties",
    href: "/developer/saved-properties",
  },
  {
    name: "Settings",
    href: "/developer/settings/account",
  },
  {
    name: "Notifications",
    href: "/developer/notifications",
  },
];
export const homeOwnerMobileRoutes = [
  {
    name: "Dashboard",
    href: `/homeowner`,
  },

  {
    name: "Saved Properties",
    href: "/homeowner/saved-properties",
  },
  {
    name: "Settings",
    href: "/homeowner/settings/account",
  },
  {
    name: "Notifications",
    href: "/homeowner/notifications",
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
