import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EducationModel } from '@core/models/education.model';

@Injectable({
  providedIn: 'root',
})
export class EducationApiService {
  private readonly _http = inject(HttpClient);

  getEducation() {
    return this._http.get<EducationModel>('/data/education.json');
  }
}
