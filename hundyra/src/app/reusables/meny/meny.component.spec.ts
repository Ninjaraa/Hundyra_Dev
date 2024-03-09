import { MenyComponent } from './meny.component';
import { EmailService } from '../../services/email.service';

describe('MenyComponent', () => {
  let component: MenyComponent;
  let emailService: jest.Mocked<EmailService>;

  beforeEach(() => {
    emailService = {
      emailAddress: 'test@example.com'
    } as unknown as jest.Mocked<EmailService>;

    component = new MenyComponent(emailService);
    global.window.open = jest.fn();
    global.alert = jest.fn();
    global.console.log = jest.fn();
    global.console.error = jest.fn();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu visibility', () => {
    expect(component.isMenuVisible).toBeFalsy();

    component.toggleMenu();

    expect(component.isMenuVisible).toBeTruthy();

    component.toggleMenu();

    expect(component.isMenuVisible).toBeFalsy();
  });

  it('should attempt to send an email when contactEmail is called', () => {
    const spy = jest.spyOn(window, 'open');
    
    component.contactEmail();
    expect(spy).toHaveBeenCalledWith(`mailto:${emailService.emailAddress}`, '_blank');
    expect(console.log).toHaveBeenCalledWith(`Attempting to send email to: ${emailService.emailAddress}`);
  });

});
