import { TestBed } from '@angular/core/testing';

import { LocalQuizService } from './local-quiz.service';

describe('LocalQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalQuizService = TestBed.get(LocalQuizService);
    expect(service).toBeTruthy();
  });
});
