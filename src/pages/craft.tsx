import React from "react";
import dynamic from 'next/dynamic';
import { Project } from "@/types/Project";

// Enhanced project data
const projects: Project[] = [
  {
    title: "Sidebar",
    date: "February 2025",
    videoSrc: "https://ext.same-assets.com/1842118252/675502616.mp4",
    description: "An innovative sidebar design with smooth transitions and intuitive navigation.",
  },
  {
    title: "Spatial Tooltip",
    date: "September 2024",
    videoSrc: "https://ext.same-assets.com/1754364355/3577133407.mp4",
    description: "A unique tooltip that provides spatial context, enhancing user understanding.",
  },
  {
    title: "Staggered Text",
    date: "August 2024",
    videoSrc: "https://ext.same-assets.com/1579115491/2278193851.mp4",
    description: "Text animation that creates a dynamic and engaging reading experience.",
  },
  {
    title: "X-Ray Interaction",
    date: "May 2024",
    videoSrc: "https://ext.same-assets.com/2848546320/55046500.mp4",
    actionText: "View Production",
    actionLink: "https://vercel.com/security",
    description: "An interactive x-ray effect that reveals hidden layers of information.",
  },
  {
    title: "Wheel Interface",
    date: "April 2024",
    videoSrc: "https://ext.same-assets.com/3344796534/1233836015.mp4",
    description: "A circular interface design that offers a unique way to navigate through options.",
  },
  {
    title: "Contrasting Aesthetics",
    date: "January 2024",
    imageSrc: "https://ext.same-assets.com/2927970813/849522504.png",
    actionText: "Read Essay",
    actionLink: "/craft/contrasting-aesthetics",
    href: "/craft/contrasting-aesthetics",
    description: "An exploration of how contrasting design elements can create compelling interfaces.",
  },
  {
    title: "SwiftUI Dock",
    date: "December 2023",
    videoSrc: "https://ext.same-assets.com/77067531/2432981568.mp4",
    description: "A reimagined dock interface inspired by SwiftUI, offering smooth animations and intuitive interactions.",
  },
  {
    title: "Invisible Details of Interaction Design",
    date: "July 2023",
    imageSrc: "https://ext.same-assets.com/1517758127/849522504.png",
    actionText: "Read Essay",
    actionLink: "/craft/interaction-design",
    href: "/craft/interaction-design",
    description: "An in-depth look at the subtle details that make interaction design truly effective.",
  },
];

interface CraftContentProps {
  projects: Project[];
}

const DynamicCraftContent = dynamic<CraftContentProps>(() => import('@/components/CraftContent'), {
  ssr: false,
});

const CraftPage: React.FC = () => {
  return <DynamicCraftContent projects={projects} />;
};

export default CraftPage;
