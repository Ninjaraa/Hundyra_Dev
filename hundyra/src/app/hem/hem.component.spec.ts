import { HemComponent } from "./hem.component"

describe('AppComponent', () => {
  let fixture: HemComponent;

  beforeEach(() => {
    fixture = new HemComponent();
  })

  it('Needs a title hundyra', () => {
    expect(fixture.title).toEqual('hundyra');
  })
})