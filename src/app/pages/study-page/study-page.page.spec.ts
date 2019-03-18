import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StudyPagePage } from "./study-page.page";

describe("StudyPagePage", () => {
  let component: StudyPagePage;
  let fixture: ComponentFixture<StudyPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudyPagePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
