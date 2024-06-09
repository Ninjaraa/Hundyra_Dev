import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vi-i-media.component.html',
  styleUrl: './vi-i-media.component.scss'
})
export class MediaComponent {
  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateTitle('Hundyra i media - Omnämnanden');
    this.seoService.updateMetaTag('description', 'Här kan du se när vi blivit omnämnda i media');
  }
}