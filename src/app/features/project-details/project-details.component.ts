import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProjectDetail } from '@core/models/project.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export default class ProjectDetailsComponent {
  private readonly _url;
  readonly project = signal<IProjectDetail | undefined>(undefined);
  readonly selectedMedia = signal<string>('');

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _translateService: TranslateService
  ) {
    this._url = this._route.snapshot.paramMap.get('url');
  }

  ngOnInit() {
    this._translateService.stream('project-details').subscribe({
      next: (projects) => {
        const _projects = projects as IProjectDetail[];

        this.project.set(
          _projects.find((project) => project.url === this._url)
        );

        this.selectedMedia.set(this.project()?.media[0] ?? '');
      },
    });
  }
}
