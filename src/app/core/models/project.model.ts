import { ProjectCategory, ProjectStatus } from '@core/models/project.enum';

interface ProjectData {
  title: string;
  featured: string;
  collaborations: string;
  experiments: string;
  cta: string;
  category: Record<ProjectCategory, string>;
  status: Record<ProjectStatus, string>;
}

export interface ProjectItemModel {
  id: string;
  thumbnail: string;
  title: string;
  category: ProjectCategory;
  skills: string[];
  description: {
    en: string;
    es: string;
  };
  section: 'FEATURED' | 'COLLABORATION' | 'SMALL';
  status: ProjectStatus;
}

export interface ProjectModel {
  en: ProjectData;
  es: ProjectData;
  items: ProjectItemModel[];
}
