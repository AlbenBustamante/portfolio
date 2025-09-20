import { Component, Input } from '@angular/core';
import { IProject } from '@features/old/v1/core/models/project.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-item',
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css',
})
export class ProjectItemComponent {
  @Input({ required: true }) project!: IProject;

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {}

  goToProject() {
    const { url } = this.project;
    this._router.navigate(['project', url], { relativeTo: this._route });
  }
}
