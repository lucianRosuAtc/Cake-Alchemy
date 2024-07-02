import { Cake, CakeSlice, Dessert, Linkedin, Mail, PhoneOutgoing } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";



// MARK: NAVIGATION LINKS
export const navigationlinks = [
  { url: "/", name: "Home" },
  { url: "/Cakes", name: "My Products" },
  { url: "/contact", name: "Contact" },
];


// MARK: SIDE NAVIGATION LINKS
// Map of links to display in the side navigation.
export const SideLinks = [
  { name: 'Cakes', href: '/Cakes', icon: Cake },
  {
    name: 'Small Cakes',
    href: '/Cakes/smallCakes',
    icon: CakeSlice,
  },
  { name: 'Muffins', href: '/Cakes/muffins', icon: Dessert },
];




// MARK: SOCIAL DATA
export const social = [
  {
    url: "https://www.linkedin.com/feed/?trk=nav_back_to_linkedin",
    myIcon: <Linkedin size={31} />,
  },
  {
    url: "https://twitter.com/LucianRosuATC",
    myIcon: <FaXTwitter size={31} />,
  },
  {
    url: "mailto:vigilent.developer@gmail.com",
    myIcon: <Mail size={31} />,
  },
  {
    url: "tel:07505",
    myIcon: <PhoneOutgoing size={31} />,
  },
];


