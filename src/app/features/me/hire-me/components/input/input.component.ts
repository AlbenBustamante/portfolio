import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  readonly type = input<'text' | 'email'>('text');
  readonly label = input.required<string>();
  readonly name = input.required<string>();
  readonly placeholder = input.required<string>();
  readonly control = input.required<FormControl>();
}
