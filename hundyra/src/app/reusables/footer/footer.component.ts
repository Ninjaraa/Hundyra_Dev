import { Component } from '@angular/core';
import { EmailService, IconService } from '../shared.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})

export class FooterComponent {
  constructor(
    public emailService: EmailService, 
    public iconService: IconService
  ) {}
}