import { BarkborrehundComponent } from './barkborrehund.component';
import { SeoService } from '../services/seo.service';

describe('BarkborrehundComponent', () => {
  let component: BarkborrehundComponent;
  let seoService: jest.Mocked<SeoService>;

  beforeEach(() => {
    seoService = {
      updateTitle: jest.fn(),
      updateMetaTag: jest.fn()
    } as unknown as jest.Mocked<SeoService>;

    component = new BarkborrehundComponent(seoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set SEO title and meta description on initialization', () => {
    component.ngOnInit();

    expect(seoService.updateTitle).toHaveBeenCalledWith('Barkborrehund');
    expect(seoService.updateMetaTag).toHaveBeenCalledWith('description', expect.any(String));
  });
});