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
    this.titleService.setTitle('Hem');
    this.metaService.updateTag({ name: 'description', content: 'Your Page Description' });
  }
}
