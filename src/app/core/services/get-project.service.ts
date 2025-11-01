import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectDetailModel } from '../models/project-detail.model';

@Injectable({
  providedIn: 'root',
})
export class GetProjectService {
  private readonly _url = 'data/projects';

  constructor(private readonly _http: HttpClient) {}

  get(id: string) {
    return this._http.get<ProjectDetailModel>(`${this._url}/${id}.json`);
  }
}
