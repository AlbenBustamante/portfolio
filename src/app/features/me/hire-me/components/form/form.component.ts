import { Component, effect, inject, LOCALE_ID } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextAreaComponent } from '../text-area/text-area.component';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { formatDate } from '@angular/common';
import { environment } from '@environments/environment.development';
import { FormStore } from './form.store';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-form',
  imports: [
    InputComponent,
    ReactiveFormsModule,
    TextAreaComponent,
    ButtonComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [FormStore],
})
export class FormComponent {
  private readonly _locale = inject(LOCALE_ID);
  private readonly _fb = inject(FormBuilder);
  readonly store = inject(FormStore);

  readonly form = this._fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor() {
    effect(() => {
      const loading = this.store.loading();

      if (loading) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    this.store.setLoading(true);

    const { name, email, subject, message } = this.form.value;
    const { serviceId, templateId, publicKey } = environment.email;
    const time = formatDate(new Date(), 'dd-MM-yyyy hh:mm a', this._locale);

    emailjs
      .send(
        serviceId,
        templateId,
        { name, email, title: subject, message, time },
        { publicKey, limitRate: { throttle: 60000 } }
      )
      .then(
        () => {
          this.form.reset();
          this.store.setLoading(false);
        },
        (err) => {
          console.log((err as EmailJSResponseStatus).text);
          this.store.setLoading(false);
        }
      );
  }
}
