import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { EmailService } from '../reusables/shared.service';
import { IconService } from '../reusables/shared.service';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [],
  templateUrl: './kontakt.component.html'
})

export class KontaktComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    public emailService: EmailService, 
    public iconService: IconService,
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Kontakt');
    this.metaService.updateTag({ name: 'description', content: 'Your Page Description' });
  }
}
