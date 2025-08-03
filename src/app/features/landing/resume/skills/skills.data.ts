import { Injectable, signal } from '@angular/core';
import { Skill } from '../../../../core/models/skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsData {
  readonly skills = signal<Skill[]>([]);
}
