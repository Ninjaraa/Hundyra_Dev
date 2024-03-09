import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';
import { EmailService } from '../services/email.service';
import { IconService } from '../services/icon.service';

@Component({
  selector: 'app-hem',
  standalone: true,
  imports: [],
  templateUrl: './hem.component.html'
})

export class HemComponent implements OnInit {

  constructor(
    private seoService: SeoService,
    public emailService: EmailService, 
    public iconService: IconService,
  ) {}

  ngOnInit() {
    this.seoService.updateTitle('Barkborresök med hund');
    this.seoService.updateMetaTag('description', 'Jag och min hund hjälper dig att söka av din skogsfastighet tidseffektivt efter barkborreangrepp. Vi är verksamma i hela Sverige. Varmt välkommen att kontakta mig!');
  }

}
