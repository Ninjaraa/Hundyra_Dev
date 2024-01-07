import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../reusables/shared.service';
import { IconService } from '../reusables/shared.service';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [],
  templateUrl: './kontakt.component.html',
})

export class KontaktComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    public emailService: EmailService, 
    public iconService: IconService,
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Välkommen att kontakta mig | Hundyra');
    this.metaService.updateTag({ name: 'description', content: 'Du är alltid välkommen att kontakta mig, oavsett vad du har för frågor. Jag finns tillgänglig via mail, Facebook och via mitt konto på Instagram.' });
  }
}
