import { TestBed } from '@angular/core/testing';

import { TopographyService } from './topography.service';

describe('TopographyService', () => {
  let service: TopographyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopographyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
