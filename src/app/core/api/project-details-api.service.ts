import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ProjectDetailItemModel,
  ProjectDetailModel,
} from '../models/project-detail.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailsApiService {
  private readonly _url = '/data/projects';

  constructor(private readonly _http: HttpClient) {}

  getProjectDetails() {
    return this._http.get<ProjectDetailModel>('/data/project-details.json');
  }

  getProjectDetailsData(id: string) {
    return this._http.get<ProjectDetailItemModel>(`${this._url}/${id}.json`);
  }
}
