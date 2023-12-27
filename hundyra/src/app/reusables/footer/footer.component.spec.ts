import { RouterLink } from "@angular/router";
import { FooterComponent } from "./footer.component"

describe('AppComponent', () => {
  let fixture: FooterComponent;

  beforeEach(() => {
    fixture = new FooterComponent();
  })

  it('Needs routerlinks', () => {
    expect(RouterLink);
  })
})