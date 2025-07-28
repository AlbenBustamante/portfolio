import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';
import skills from '../../../assets/skills.json';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  getSkills() {
    return skills as Skill[];
  }
}
