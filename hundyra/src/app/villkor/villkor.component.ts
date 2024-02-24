import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-villkor',
  standalone: true,
  imports: [],
  templateUrl: './villkor.component.html'
})

export class VillkorComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Köpvillkor | Hundyra');
    this.metaService.updateTag({ name: 'description', content: 'Detta är de köpvillkor som du godkänner genom att beställa en tjänst från företaget.' });
  }
}
