import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './privacy.component.html',
})
export class PrivacyComponent implements OnInit {

  constructor(private seoService: SeoService) {}

    ngOnInit() {
      this.seoService.updateTitle('Sekretesspolicy');
      this.seoService.updateMetaTag('description', 'Detta är de sekretesspolicy som gäller när du besöker Hundyra.se');
      this.seoService.updateMetaTag('robots', 'noindex');
    }
}
