interface ProjectDetailData {
  return: string;
  description: string;
  technologies: string;
  demo: string;
  source: string;
}

export interface ProjectDetailModel {
  en: ProjectDetailData;
  es: ProjectDetailData;
}

export interface ProjectDetailItemModel {
  id: string;
  title: string;
  gallery: string[];
  category: string;
  skills: string[];
  sourceCode: string;
  liveDemo: string;
  status: string;
  en: { description: string };
  es: { description: string };
}
