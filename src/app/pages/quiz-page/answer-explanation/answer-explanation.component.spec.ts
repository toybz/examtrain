import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerExplanationComponent } from './answer-explanation.component';

describe('AnswerExplanationComponent', () => {
  let component: AnswerExplanationComponent;
  let fixture: ComponentFixture<AnswerExplanationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerExplanationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
