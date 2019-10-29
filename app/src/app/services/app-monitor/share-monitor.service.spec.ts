import { TestBed } from '@angular/core/testing';

import { ShareMonitorService } from './share-monitor.service';

describe('ShareMonitorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareMonitorService = TestBed.get(ShareMonitorService);
    expect(service).toBeTruthy();
  });
});
