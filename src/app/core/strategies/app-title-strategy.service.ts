import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppTitleStrategyService extends TitleStrategy {
  private readonly _title = inject(Title);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const prefix = 'Alben Bustamante';
    const title = this.buildTitle(snapshot) || this._title.getTitle();

    this._title.setTitle(`${prefix} | ${title}`);
  }
}
