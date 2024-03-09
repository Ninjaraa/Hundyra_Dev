import { FooterComponent } from './footer.component';
import { EmailService } from '../../services/email.service';
import { IconService } from '../../services/icon.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let emailService: jest.Mocked<EmailService>;
  let iconService: jest.Mocked<IconService>;

  beforeEach(() => {
    emailService = {} as jest.Mocked<EmailService>;
    iconService = {
      instagramIconClass: 'fa-instagram',
      facebookIconClass: 'fa-facebook'
    } as jest.Mocked<IconService>;

    component = new FooterComponent(emailService, iconService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});