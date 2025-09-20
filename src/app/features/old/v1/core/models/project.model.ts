export interface IProject {
  url: string;
  title: string;
  skills: string[];
  photoUrl: string;
  description: string;
}

export interface IProjectDetail extends Omit<IProject, 'photoUrl'> {
  media: string[];
  liveDemoUrl: string;
  sourceCodeUrl: string;
}
