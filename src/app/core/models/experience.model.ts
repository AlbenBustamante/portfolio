interface ExperienceData {
  occupation: string;
  year: string;
  description: string;
}

export interface ExperienceItemModel {
  company: string;
  en: ExperienceData;
  es: ExperienceData;
  skills: string[];
}

export interface ExperienceModel {
  title: {
    en: string;
    es: string;
  };
  items: ExperienceItemModel[];
}
