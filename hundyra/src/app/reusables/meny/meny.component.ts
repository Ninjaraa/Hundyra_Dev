import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meny',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './meny.component.html',
})

export class MenyComponent {
  isMenuVisible: boolean = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}