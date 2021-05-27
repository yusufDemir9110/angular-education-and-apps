import { TestBed } from '@angular/core/testing';

import { MovieSerService } from './movie-ser.service';

describe('MovieSerService', () => {
  let service: MovieSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
