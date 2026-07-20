export interface EducationItemModel {
  institute: string;
  degree: string;
  year: string;
}

interface EducationData {
  title: string;
  items: EducationItemModel[];
}

export interface EducationModel {
  en: EducationData;
  es: EducationData;
}
