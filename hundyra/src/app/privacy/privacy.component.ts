import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
})
export class PrivacyComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Sekretesspolicy | Hundyra');
    this.metaService.updateTag({ name: 'description', content: 'Detta är de sekretesspolicy som gäller när du besöker Hundyra.se' });
  }
}
