import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';
import { ScrollRevealDirective } from '../shared/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  imports: [FormsModule, ScrollRevealDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  sending = false;
  formStatus: 'idle' | 'success' | 'error' = 'idle';

  sendEmail(form: NgForm): void {
    if (form.invalid || this.sending) {
      return;
    }

    this.sending = true;
    this.formStatus = 'idle';

    emailjs.send('service_9bsjybq', 'template_u7psef6', {
      from_name: this.formData.name,
      reply_to: this.formData.email,
      subject: this.formData.subject || 'Portfolio inquiry',
      message: this.formData.message,
    }, 'exrdSnOG8p3cBM9gA')
      .then(() => {
        form.resetForm();
        this.formStatus = 'success';
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        this.formStatus = 'error';
      })
      .finally(() => {
        this.sending = false;
      });
  }
}
