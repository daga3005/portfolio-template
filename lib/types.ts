// types/index.ts
export type HeroUIColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";

export interface SkillOverview {
  name: string;
  level: number;
  icon: string;
  color: HeroUIColor; // 👈 Importante: usa el tipo específico
}

export interface HomeData {
  hero: {
    name: string;
    title: string;
    subtitle: string;
  };
  skills: {
    sectionTitle: string;
    sectionDescription: string;
    overview: SkillOverview[];
  };
}