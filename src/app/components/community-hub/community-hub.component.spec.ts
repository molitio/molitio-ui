import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityHubComponent } from './community-hub.component';

describe('CommunityHubComponent', () => {
  let component: CommunityHubComponent;
  let fixture: ComponentFixture<CommunityHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
