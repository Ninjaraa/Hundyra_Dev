import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-meny',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './meny.component.html',
})

export class MenyComponent {
  isMenuVisible: boolean = false;

  constructor(public emailService: EmailService) { }

  contactEmail() {
    const mailtoString = `mailto:${this.emailService.emailAddress}`;
    console.log(`Attempting to send email to: ${this.emailService.emailAddress}`);
    
    try {
      window.open(mailtoString, '_blank');
      alert('If your email client did not open, please check your email settings or manually send an email to ' + this.emailService.emailAddress);
    } catch (e) {
      console.error('Error opening mail client: ', e);
      alert('There was an error opening your email client. Please manually send an email to ' + this.emailService.emailAddress);
    }
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}