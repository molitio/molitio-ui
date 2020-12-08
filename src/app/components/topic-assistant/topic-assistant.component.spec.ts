import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAssistantComponent } from './topic-assistant.component';

describe('TopicAssistantComponent', () => {
  let component: TopicAssistantComponent;
  let fixture: ComponentFixture<TopicAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicAssistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
