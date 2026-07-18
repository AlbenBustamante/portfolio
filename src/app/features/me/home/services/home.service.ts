import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HomeModel } from '../home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly _http = inject(HttpClient);

  getHome() {
    return this._http.get<HomeModel>('/data/home.json');
  }
}
