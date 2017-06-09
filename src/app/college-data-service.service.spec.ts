/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CollegeDataService } from './college-data-service.service';

describe('CollegeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollegeDataService]
    });
  });

  it('should ...', inject([CollegeDataService], (service: CollegeDataService) => {
    expect(service).toBeTruthy();
  }));
});
