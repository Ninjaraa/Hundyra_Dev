import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenyComponent } from './meny.component';

describe('MenyComponent', () => {
  let component: MenyComponent;
  let fixture: ComponentFixture<MenyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
