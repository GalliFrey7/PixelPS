import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxCode,
  RxHome,
  RxPerson,
  RxDashboard,
} from "react-icons/rx";

export const Socials = [
  {
    name: "Discord",
    src: "/assets/discord.svg",
  },
  {
    name: "Facebook",
    src: "/assets/facebook.svg",
  },
  {
    name: "Instagram",
    src: "/assets/instagram.svg",
  },
];

export const NavLinks = [
  {
    name: "Home",
    icon: RxHome,
    link: "/",
  },
  {
    name: "About me",
    icon: RxPerson,
    link: "/about-me",
  },
  {
    name: "Projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
];

export const ProImages = [
  {
    src: "/assets/projects/1.jpg",
    url: "https://acme-corp-tau.vercel.app/",
  },
  {
    src: "/assets/projects/2.jpg",
    url: "https://web-wizards-studios-beta.vercel.app/",
  },
  {
    src: "/assets/projects/3.jpg",
    url: "https://vr-5cfoniv2w-gallifreys-projects.vercel.app/",
  },
  {
    src: "/assets/projects/4.jpg",
    url: "/",
  },
];



export const ServiceData = [
  {
    icon: RxCode  ,
    title: "Web Development",
    content: "Developing clean and efficient code for dynamic and responsive websites. Specialized in HTML, CSS, JavaScript, and React.",
    backgroundImage: "/assets/space/red.png",
  },
  {
    icon: RxCrop,
    title: "Graphic Design",
    content: "Creating visually appealing designs for branding, advertising, and corporate print materials. Utilizing modern design tools.",
    backgroundImage: "/assets/space/ore.png",
  },
  {
    icon: RxPencil2,
    title: "Communications",
    content: "Developing effective communication strategies to strengthen brand presence and improve engagement with clients and partners.",
    backgroundImage: "/assets/space/yel1.avif",
  },
  {
    icon: RxDesktop,
    title: "Research and Development",
    content: "Conducting research on new technologies and developing innovative solutions to advance in the market.",
    backgroundImage: "/assets/space/gre.png",
  },
];
