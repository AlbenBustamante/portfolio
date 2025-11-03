import { Injectable } from '@angular/core';
import projects from '@public/data/projects.json';
import { Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private readonly _http: HttpClient) {}

  getAll() {
    return this._http.get<Project[]>('/data/projects.json');
  }
}
