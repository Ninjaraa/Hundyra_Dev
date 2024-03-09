import { NinjaComponent } from './ninja.component';
import { SeoService } from '../services/seo.service';

describe('KontaktComponent', () => {
  let component: NinjaComponent;
  let seoService: jest.Mocked<SeoService>;

  beforeEach(() => {
    seoService = {
      updateTitle: jest.fn(),
      updateMetaTag: jest.fn()
    } as unknown as jest.Mocked<SeoService>;

    component = new NinjaComponent(seoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set SEO title and meta description on initialization', () => {
    component.ngOnInit();

    expect(seoService.updateTitle).toHaveBeenCalledWith('Hundinstruktör/beteendeutredare i Mark');
    expect(seoService.updateMetaTag).toHaveBeenCalledWith('description', expect.any(String));
  });
});