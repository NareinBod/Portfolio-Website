import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Corrected from "styleUrl" to "styleUrls"
})
export class HomeComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  emailSent = false; // New flag for popup

  sendEmail(form: NgForm) {
    const serviceId = 'service_9bsjybq';
    const templateId = 'template_u7psef6';
    const publicKey = 'exrdSnOG8p3cBM9gA';

    emailjs.send(serviceId, templateId, {
      from_name: this.formData.name,
      subject: this.formData.subject,
      message: this.formData.message,
    }, publicKey)
    .then((response) => {
      console.log('Email sent!', response);
      form.resetForm();
      this.emailSent = true;

      setTimeout(() => {
        this.emailSent = false;
      }, 3000); // Hide after 3 seconds
    })
    .catch((error) => {
      console.error('Email failed to send:', error);
    });

    alert('✅ Message sent successfully!')
  }

  showAlert() {
    const alertElement = document.getElementById('myAlert');
    if (alertElement) {
      alertElement.style.display = 'block';
    }
  }
  
  hideAlert() {
    const alertElement = document.getElementById('myAlert');
    if (alertElement) {
      alertElement.style.display = 'none';
    }
  }

  showSuccess = false;

  showSuccessMessage() {
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 3000); // Hides after 3 seconds
  }


}
