import { Component, inject } from '@angular/core';
import { ProjectDetailsStore } from '../../project-details.store';
import { ArrowIconComponent } from '../arrow-icon/arrow-icon.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [ArrowIconComponent, NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  readonly store = inject(ProjectDetailsStore);
}
