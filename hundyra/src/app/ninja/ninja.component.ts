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
    this.titleService.setTitle('Om Ninja');
    this.metaService.updateTag({ name: 'description', content: 'Your Page Description' });
  }
}
