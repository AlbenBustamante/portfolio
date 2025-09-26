import { Injectable } from '@angular/core';
import projects from '@public/data/projects.json';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  get projects() {
    return projects as Project[];
  }
}
