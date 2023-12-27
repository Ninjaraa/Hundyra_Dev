import { BarkborrehundComponent } from "./barkborrehund.component"

describe('AppComponent', () => {
  let fixture: BarkborrehundComponent;

  beforeEach(() => {
    fixture = new BarkborrehundComponent();
  })

  it('Needs a title hundyra', () => {
    expect(fixture.title).toEqual('barkborrehund');
  })
})