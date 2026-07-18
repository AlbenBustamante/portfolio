import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AboutMeModel } from '../about-me.model';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  private readonly _http = inject(HttpClient);

  getAboutMe() {
    return this._http.get<AboutMeModel>('/data/about-me.json');
  }
}
