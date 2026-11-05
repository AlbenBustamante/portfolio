import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FooterModel } from '@core/models/footer.model';

@Injectable({
  providedIn: 'root',
})
export class FooterApiService {
  private readonly _http = inject(HttpClient);

  getFooter() {
    return this._http.get<FooterModel>('/data/footer.json');
  }
}
