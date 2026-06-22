import { homeData } from "./home";
import { aboutData } from "./about";
import { projectsData } from "./projects";
import { contactData } from "./contact";
import { navigationData } from "./navigation";
import { footerData } from "./footer";
import { morphingTextsData } from "./morphing-texts";

export const DATA = {
  home: homeData,
  about: aboutData,
  projects: projectsData,
  contact: contactData,
  navigation: navigationData,
  footer: footerData,
  morphingTexts: morphingTextsData,
} as const;