import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-barkborrehund',
  standalone: true,
  imports: [],
  templateUrl: './barkborrehund.component.html'
})

export class BarkborrehundComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Barkborrehund | Hundyra');
    this.metaService.updateTag({ name: 'description', content: 'En “barkborrehund” är en hund som är tränad att söka och lokalisera angrepp från granbarkborren. Läs mer om hur vi jobbar och nyttan med att söka med hund.' });
  }
}