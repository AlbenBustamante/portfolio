type Lang = {
  description: {
    en: string;
    es: string;
  };
};

export interface Project {
  id: string;
  thumbnail: string;
  title: string;
  category: string;
  skills: string[];
  lang: Lang;
  featured: boolean;
  sourceCode: string;
  liveDemo: string;
}
