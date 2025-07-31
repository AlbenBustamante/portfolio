import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export default class ProjectDetailsComponent {
  private readonly _url;

  constructor(private readonly _route: ActivatedRoute) {
    this._url = this._route.snapshot.paramMap.get('url');
  }
}
