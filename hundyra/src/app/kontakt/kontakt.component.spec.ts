import { KontaktComponent } from './kontakt.component';
import { SeoService } from '../services/seo.service';
import { EmailService } from '../services/email.service';
import { IconService } from '../services/icon.service';

describe('KontaktComponent', () => {
  let component: KontaktComponent;
  let seoService: jest.Mocked<SeoService>;
  let emailService: jest.Mocked<EmailService>;
  let iconService: jest.Mocked<IconService>;

  beforeEach(() => {
    seoService = {
      updateTitle: jest.fn(),
      updateMetaTag: jest.fn()
    } as unknown as jest.Mocked<SeoService>;
    
    emailService = {} as unknown as jest.Mocked<EmailService>;
    iconService = {} as unknown as jest.Mocked<IconService>;

    component = new KontaktComponent(seoService, emailService, iconService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set SEO title and meta description on initialization', () => {
    component.ngOnInit();

    expect(seoService.updateTitle).toHaveBeenCalledWith('Välkommen att kontakta mig');
    expect(seoService.updateMetaTag).toHaveBeenCalledWith('description', expect.any(String));
  });
});