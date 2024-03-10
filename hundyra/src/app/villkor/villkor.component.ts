import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-villkor',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './villkor.component.html'
})

export class VillkorComponent implements OnInit {

  constructor(private seoService: SeoService) {}

    ngOnInit() {
      this.seoService.updateTitle('Köpvillkor');
      this.seoService.updateMetaTag('description', 'Detta är de köpvillkor som du godkänner genom att beställa en tjänst från företaget.');
      this.seoService.updateMetaTag('robots', 'noindex');
    }
}