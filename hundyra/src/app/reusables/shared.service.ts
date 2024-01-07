import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  emailAddress = 'info@mail.se';
}

@Injectable({
  providedIn: 'root'
})
export class IconService {
  facebookIconClass = 'bi-facebook';
  instagramIconClass = 'bi-instagram';
  envelopeIconClass = 'bi-envelope';
}