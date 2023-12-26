import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarkborrehundComponent } from './barkborrehund.component';

describe('BarkborrehundComponent', () => {
  let component: BarkborrehundComponent;
  let fixture: ComponentFixture<BarkborrehundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarkborrehundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarkborrehundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
