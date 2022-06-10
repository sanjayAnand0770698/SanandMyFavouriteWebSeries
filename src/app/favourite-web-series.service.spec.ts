import { TestBed } from '@angular/core/testing';

import { FavouriteWebSeriesService } from './favourite-web-series.service';

describe('FavouriteWebSeriesService', () => {
  let service: FavouriteWebSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteWebSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
