import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesideratumComponent } from './desideratum.component';

describe('DesideratumComponent', () => {
  let component: DesideratumComponent;
  let fixture: ComponentFixture<DesideratumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesideratumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesideratumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
