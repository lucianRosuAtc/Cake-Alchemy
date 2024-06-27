import { Linkedin, Mail, PhoneOutgoing } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

// MARK: NAVIGATION LINKS
export const navigationlinks = [
  { url: "/", name: "Home" },
  { url: "/services", name: "My Services" },
  { url: "/contact", name: "Contact" },
];

// MARK: SOCIAL DATA
export const social = [
  {
    url: "https://www.linkedin.com/feed/?trk=nav_back_to_linkedin",
    myIcon: <Linkedin size={31}/>,
  },
  {
    url: "https://twitter.com/LucianRosuATC",
    myIcon: <FaXTwitter size={31}/>,
  },
  {
    url: "mailto:vigilent.developer@gmail.com",
    myIcon: <Mail size={31}/>,
  },
  {
    url: "tel:07505",
    myIcon: <PhoneOutgoing size={31}/>,
  },
];


