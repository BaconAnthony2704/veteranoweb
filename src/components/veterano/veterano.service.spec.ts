import { TestBed } from '@angular/core/testing';

import { VeteranoService } from './veterano.service';

describe('VeteranoService', () => {
  let service: VeteranoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeteranoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
