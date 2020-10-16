import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolitioLogoComponent } from './molitio-logo.component';

describe('MolitioLogoComponent', () => {
  let component: MolitioLogoComponent;
  let fixture: ComponentFixture<MolitioLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolitioLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolitioLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
