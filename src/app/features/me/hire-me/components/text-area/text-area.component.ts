import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormItemModel } from '@core/models/hire-me.model';

@Component({
  selector: 'app-text-area',
  imports: [ReactiveFormsModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css',
})
export class TextAreaComponent {
  readonly name = input.required<string>();
  readonly control = input.required<FormControl>();
  readonly item = input<FormItemModel>();
}
