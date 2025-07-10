import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  imports: [],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.css',
})
export class SkillItemComponent {
  @Input({ required: true }) skill!: string;
}
