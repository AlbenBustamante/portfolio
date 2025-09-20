import { Component, Inject, LOCALE_ID } from '@angular/core';
import { InputComponent } from '@features/old/v1/components/input/input.component';
import { TextareaComponent } from '@features/old/v1/components/textarea/textarea.component';
import { ButtonComponent } from '@features/old/v1/components/button/button.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '@environments/environment.development';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  imports: [
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  readonly form;

  constructor(
    @Inject(LOCALE_ID) private readonly _locale: string,
    private readonly _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      title: [''],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    const { name, email, title, message } = this.form.value;
    const { serviceId, templateId, publicKey } = environment.email;
    const time = formatDate(new Date(), 'dd-MM-yyyy hh:mm a', this._locale);

    emailjs
      .send(
        serviceId,
        templateId,
        { name, email, title, message, time },
        { publicKey, limitRate: { throttle: 60000 } }
      )
      .then(
        () => {
          this.form.reset();
        },
        (err) => {
          console.log((err as EmailJSResponseStatus).text);
        }
      );
  }

  onClean() {
    this.form.reset();
  }

  label(field: string) {
    return `${this.formJson}.${field}.label`;
  }

  placeholder(field: string) {
    return `${this.formJson}.${field}.placeholder`;
  }

  private get formJson() {
    return 'old.v1.landing.contact.form';
  }
}
