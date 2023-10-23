import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathComponent } from './bath.component';

describe('BathComponent', () => {
  let component: BathComponent;
  let fixture: ComponentFixture<BathComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BathComponent]
    });
    fixture = TestBed.createComponent(BathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
