import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SkillsAndTechnologiesModel } from '@core/models/skills-and-technologies.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsApiService {
  private readonly _http = inject(HttpClient);

  getSkills() {
    return this._http.get<SkillsAndTechnologiesModel>(
      '/data/skills-and-technologies.json',
    );
  }
}
