import { Component, inject } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextAreaComponent } from '../text-area/text-area.component';

@Component({
  selector: 'app-form',
  imports: [InputComponent, ReactiveFormsModule, TextAreaComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  private readonly _fb = inject(FormBuilder);

  readonly form = this._fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    console.table(this.form.value);
    this.form.reset();
  }
}
