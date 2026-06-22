// data/homeData.ts
import type { HomeData } from "@/lib/types";

export const homeData: HomeData = {
  hero: {
    name: "Daniel García",
    title: "Full-Stack Web Developer",
    subtitle:
      "Telecommunications and Electronics Engineer. I build modern, scalable, and accessible web applications with React, Next.js, and Node.js.",
  },
  skills: {
    sectionTitle: "Skills & Expertise",
    sectionDescription:
      "Technologies and tools I use to create complete web solutions",
    overview: [
      {
        name: "Frontend Development",
        level: 90,
        icon: "lucide:code",
        color: "primary", // ✅ Ahora es del tipo correcto
      },
      {
        name: "Backend Development",
        level: 85,
        icon: "lucide:server",
        color: "secondary",
      },
      {
        name: "Databases",
        level: 85,
        icon: "lucide:database",
        color: "success",
      },
      {
        name: "UI/UX Design",
        level: 80,
        icon: "lucide:layout-dashboard",
        color: "warning",
      },
    ],
  },
};