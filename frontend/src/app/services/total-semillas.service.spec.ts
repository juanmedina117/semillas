import { TestBed } from '@angular/core/testing';

import { TotalSemillasService } from './total-semillas.service';

describe('TotalSemillasService', () => {
  let service: TotalSemillasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalSemillasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
