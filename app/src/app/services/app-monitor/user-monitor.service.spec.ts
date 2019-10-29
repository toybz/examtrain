import { TestBed } from '@angular/core/testing';

import { UserMonitorService } from './user-monitor.service';

describe('UserMonitorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMonitorService = TestBed.get(UserMonitorService);
    expect(service).toBeTruthy();
  });
});
