import {TestBed} from '@angular/core/testing';

import {DemoQuizCounterService} from './demo-quiz-counter.service';

describe('DemoQuizCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoQuizCounterService = TestBed.get(DemoQuizCounterService);
    expect(service).toBeTruthy();
  });
});
