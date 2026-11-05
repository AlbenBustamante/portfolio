import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProjectModel } from '@core/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectApiService {
  private readonly _http = inject(HttpClient);

  getProject() {
    return this._http.get<ProjectModel>('/data/projects.json');
  }
}
