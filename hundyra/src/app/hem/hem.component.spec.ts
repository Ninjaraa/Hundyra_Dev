import { HemComponent } from './hem.component';
import { SeoService } from '../services/seo.service';
import { EmailService } from '../services/email.service';
import { IconService } from '../services/icon.service';

describe('KontaktComponent', () => {
  let component: HemComponent;
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

    component = new HemComponent(seoService, emailService, iconService);
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