import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionBoardComponent } from './mission-board.component';

describe('MissionBoardComponent', () => {
  let component: MissionBoardComponent;
  let fixture: ComponentFixture<MissionBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
