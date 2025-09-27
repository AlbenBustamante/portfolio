import { Injectable } from '@angular/core';
import education from '@public/data/education.json';
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  getEducations(lang: 'en' | 'es') {
    return education.langs[lang] as Education[];
  }
}
