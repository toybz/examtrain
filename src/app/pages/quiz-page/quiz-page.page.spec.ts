import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPagePage } from './quiz-page.page';

describe('QuizPagePage', () => {
  let component: QuizPagePage;
  let fixture: ComponentFixture<QuizPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
