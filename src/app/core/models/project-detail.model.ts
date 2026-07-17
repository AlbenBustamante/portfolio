export interface ProjectDetailModel {
  id: string;
  title: string;
  gallery: string[];
  category: string;
  skills: string[];
  sourceCode: string;
  liveDemo: string;
  status: string;
  lang: { description: string };
}
