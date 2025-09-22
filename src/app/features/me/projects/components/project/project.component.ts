import { Component } from '@angular/core';
import { OpenLiveDemoComponent } from '../open-live-demo/open-live-demo.component';

@Component({
  selector: 'app-project',
  imports: [OpenLiveDemoComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {}
