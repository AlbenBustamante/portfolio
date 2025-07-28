import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private readonly _url = 'assets/skills.json';

  constructor(private readonly _http: HttpClient) {}

  getSkills() {
    return this._http.get<Skill[]>(this._url);
  }
}
