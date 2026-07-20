import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ExperienceModel } from '@core/models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceApiService {
  private readonly _http = inject(HttpClient);

  getExperience() {
    return this._http.get<ExperienceModel>('/data/experience.json');
  }
}
