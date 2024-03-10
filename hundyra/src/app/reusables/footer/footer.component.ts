import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { IconService } from '../../services/icon.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
})

export class FooterComponent {
  constructor(
    public emailService: EmailService, 
    public iconService: IconService
  ) {}
}