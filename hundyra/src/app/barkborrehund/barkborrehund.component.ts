import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-barkborrehund',
  standalone: true,
  imports: [],
  templateUrl: './barkborrehund.component.html'
})

export class BarkborrehundComponent implements OnInit {

  constructor(
    private seoService: SeoService) 
    {

    }

  ngOnInit() {
    this.seoService.updateTitle('Barkborrehund');
    this.seoService.updateMetaTag('description', 'En “barkborrehund” är en hund som är tränad att söka och lokalisera angrepp från granbarkborren. Läs mer om hur vi jobbar och nyttan med att söka med hund.');  }
}