import { TestBed } from '@angular/core/testing';
import { ApiServiceService } from './apiserver.service';

// import { ApiserverService } from './apiserver.service';
// ApiServiceService

describe('ApiserverService', () => {
  let service: ApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
