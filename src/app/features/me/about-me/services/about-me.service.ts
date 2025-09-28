import { Injectable } from '@angular/core';
import aboutMe from '@public/data/about-me.json';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  getDescription(lang: 'en' | 'es') {
    return aboutMe.langs[lang] as string[];
  }
}
