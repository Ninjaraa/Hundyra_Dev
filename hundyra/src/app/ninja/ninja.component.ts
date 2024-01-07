import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ninja',
  standalone: true,
  imports: [],
  templateUrl: './ninja.component.html',
})

export class NinjaComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Hundinstruktör/beteendeutredare i Mark | Hundyra');
    this.metaService.updateTag({ name: 'description', content: 'Jag jobbar som hundinstruktör/beteendeutredare i Marks kommun. Jag hjälper dig med din hundträning, varmt välkommen!' });
  }
}
