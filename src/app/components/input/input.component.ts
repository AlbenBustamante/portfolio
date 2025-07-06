import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) label!: string;
  @Input() type: 'text' | 'email' = 'text';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl('');
  @Input() autocomplete: 'name' | 'email' | 'off' = 'off';
}
