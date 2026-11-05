import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HireMeModel } from '@core/models/hire-me.model';

@Injectable({
  providedIn: 'root',
})
export class HireMeApiService {
  private readonly _http = inject(HttpClient);

  getHireMe() {
    return this._http.get<HireMeModel>('/data/hire-me.json');
  }
}
