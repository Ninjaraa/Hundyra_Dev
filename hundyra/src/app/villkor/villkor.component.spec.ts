import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillkorComponent } from './villkor.component';

describe('VillkorComponent', () => {
  let component: VillkorComponent;
  let fixture: ComponentFixture<VillkorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillkorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VillkorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
