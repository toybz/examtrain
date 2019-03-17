import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSetupPagePage } from './quiz-setup-page.page';

describe('QuizSetupPagePage', () => {
  let component: QuizSetupPagePage;
  let fixture: ComponentFixture<QuizSetupPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSetupPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSetupPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
