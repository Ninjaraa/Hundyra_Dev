import { AppComponent } from "./app.component"

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  })

  it('Needs a title hundyra', () => {
    expect(fixture.title).toEqual('hundyra');
  })
})