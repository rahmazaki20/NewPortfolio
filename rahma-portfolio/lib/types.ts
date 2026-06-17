import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
  technologies: string[];
}

export type Education = {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
};

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  category: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  status: string;
  period: string;
  description: string[];
  skills: string[];
  color: string;
  link: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  availability: boolean;
  bio: string;
  resumeUrl: string;
  location: string;
  phone?: string;
}

export interface LearningItem {
  title: string;
  description: string;
  progress: number;
  startedDate: string;
  icon: any;
} 