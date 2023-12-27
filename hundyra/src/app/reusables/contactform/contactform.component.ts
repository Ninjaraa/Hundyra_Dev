import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  constructor(
    private formBuilder: FormBuilder,
  ) {}
}
