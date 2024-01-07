import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-hem',
  standalone: true,
  imports: [],
  templateUrl: './hem.component.html'
})

export class HemComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Barkborresök med hund | Hundyra');
    this.metaService.updateTag({ name: 'description', content: 'Jag och min hund hjälper dig att söka av din skogsfastighet tidseffektivt efter barkborreangrepp. Vi är verksamma i hela Sverige. Varmt välkommen att kontakta mig!' });
  }
}
