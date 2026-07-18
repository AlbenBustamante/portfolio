import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { NavbarModel } from '@core/models/navbar.model';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private readonly _http = inject(HttpClient);

  getNavbar() {
    return this._http.get<NavbarModel[]>('/data/navigation.json');
  }
}
