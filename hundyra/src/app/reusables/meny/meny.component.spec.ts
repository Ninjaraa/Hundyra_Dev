import { MenyComponent } from "./meny.component"

describe('AppComponent', () => {
  let fixture: MenyComponent;

  beforeEach(() => {
    fixture = new MenyComponent();
  })

  it('Needs a title hundyra', () => {
    expect(fixture.isMenuVisible);
  })
})