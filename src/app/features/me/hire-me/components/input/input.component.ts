import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormItemModel } from '@core/models/hire-me.model';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  readonly autocomplete = input<'name' | 'email' | 'off'>('off');
  readonly type = input<'text' | 'email'>('text');
  readonly name = input.required<string>();
  readonly control = input.required<FormControl>();
  readonly item = input<FormItemModel>();
}
