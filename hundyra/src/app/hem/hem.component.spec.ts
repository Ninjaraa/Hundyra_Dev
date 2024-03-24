declare global {
  interface Window {
    dataLayer: any[]; 
  }
}

import { HemComponent } from './hem.component';
import { SeoService } from '../services/seo.service';
import { EmailService } from '../services/email.service';
import { IconService } from '../services/icon.service';
import { GtmService } from '../services/gtm.service';

describe('HemComponent', () => {
  let component: HemComponent;
  let seoService: jest.Mocked<SeoService>;
  let emailService: jest.Mocked<EmailService>;
  let iconService: jest.Mocked<IconService>;
  let gtmService: jest.Mocked<GtmService>;

  beforeEach(() => {
    jest.clearAllMocks();

    seoService = {
      updateTitle: jest.fn(),
      updateMetaTag: jest.fn()
    } as unknown as jest.Mocked<SeoService>;

    (global as any).window = {
      dataLayer: [], 
    };

    emailService = {} as unknown as jest.Mocked<EmailService>;
    iconService = {} as unknown as jest.Mocked<IconService>;
    gtmService = {} as unknown as jest.Mocked<GtmService>;

    component = new HemComponent(seoService, emailService, iconService, gtmService);
  });

  afterEach(() => {
    (global as any).window = undefined;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set SEO title and meta description on initialization', () => {
    component.ngOnInit();

    expect(seoService.updateTitle).toHaveBeenCalledWith('Barkborresök med hund');
    expect(seoService.updateMetaTag).toHaveBeenCalledWith('description', expect.any(String));
  });
});