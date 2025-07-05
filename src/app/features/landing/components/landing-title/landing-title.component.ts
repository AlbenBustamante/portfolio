import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-title',
  imports: [],
  templateUrl: './landing-title.component.html',
  styleUrl: './landing-title.component.css',
})
export class LandingTitleComponent {
  @Input({ required: true }) headline!: string;
}
