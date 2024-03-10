import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  loadConsentScript(): void {
    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js';
    script.onload = () => {
      this.initConsent();
    };
    this.document.body.appendChild(script);
  }

  private initConsent(): void {
    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      cookieconsent.run({
        "notice_banner_type":"interstitial",
        "consent_type":"express",
        "palette":"light",
        "language":"sv",
        "page_load_consent_levels":["strictly-necessary"],
        "notice_banner_reject_button_hide":false,
        "preferences_center_close_button_hide":false,
        "page_refresh_confirmation_buttons":false,
        "website_name":"hundyra.se",
        "website_privacy_policy_url":"/sekretesspolicy"
      });
    `;
    this.document.body.appendChild(script);
  }
}