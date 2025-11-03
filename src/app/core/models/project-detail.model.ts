import { Lang } from '@core/models/lang.model';

export interface ProjectDetailModel {
  id: string;
  title: string;
  gallery: string[];
  category: string;
  skills: string[];
  lang: Lang<{
    description: string;
  }>;
  sourceCode: string;
  liveDemo: string;
  status: string;
}
