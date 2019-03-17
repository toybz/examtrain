import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionPagePage } from './correction-page.page';

describe('CorrectionPagePage', () => {
  let component: CorrectionPagePage;
  let fixture: ComponentFixture<CorrectionPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
