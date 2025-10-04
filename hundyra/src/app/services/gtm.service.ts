import { Injectable, Inject, DOCUMENT } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GtmService {
  private isGtmLoaded: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  initGtmScript(): void {
    if (!this.isGtmLoaded) {
      const gtmScript = this.document.createElement('script');
      gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5GNTGTL');
    `;
      this.document.body.appendChild(gtmScript);
      this.isGtmLoaded = true;
    }
  }

  loadGtmIfConsentGranted(): void {
    if (window.dataLayer.some(entry => entry[0] === 'consent' && entry[1] === 'update' && entry[2].analytics_storage === 'granted')) {
      this.initGtmScript();
    } else {
    }
  }

  trackButtonClick(buttonName: string): void {
    if (this.isGtmLoaded && window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click',
        event_category: 'Button Clicks',
        event_action: 'click',
        event_label: buttonName
      });
    }
  }
}