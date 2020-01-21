import { TestBed } from '@angular/core/testing';

import { PosServicesService } from './pos-services.service';

describe('PosServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PosServicesService = TestBed.get(PosServicesService);
    expect(service).toBeTruthy();
  });
});
