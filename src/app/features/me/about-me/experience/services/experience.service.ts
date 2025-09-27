import { Injectable } from '@angular/core';
import experience from '@public/data/experience.json';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  getExperience(lang: 'en' | 'es') {
    return experience.lang[lang] as Experience[];
  }
}
