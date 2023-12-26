import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meny',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meny.component.html',
  styleUrl: './meny.component.scss'
})

export class MenyComponent {
  isMenuVisible: boolean = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}