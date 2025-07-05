import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-item',
  imports: [],
  templateUrl: './resume-item.component.html',
  styleUrl: './resume-item.component.css',
})
export class ResumeItemComponent {
  @Input({ required: true }) headline!: string;
  @Input({ required: true }) date!: string;
}
