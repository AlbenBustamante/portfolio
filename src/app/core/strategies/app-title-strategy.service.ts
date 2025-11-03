import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { GetProjectService } from '@core/services/get-project.service';

@Injectable({
  providedIn: 'root',
})
export class AppTitleStrategyService extends TitleStrategy {
  private readonly _title = inject(Title);
  private readonly _getProjectService = inject(GetProjectService);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const prefix = 'Alben Bustamante';

    if (snapshot.url.includes('/projects/')) {
      const id = snapshot.url.split('/')[2];

      this._getProjectService.get(id).subscribe({
        next: (project) => {
          return this._title.setTitle(`${prefix} | ${project.title}`);
        },
        error: (err) => console.warn(err),
      });
    }

    const title = this.buildTitle(snapshot) || 'Software Developer';

    this._title.setTitle(`${prefix} | ${title}`);
  }
}
