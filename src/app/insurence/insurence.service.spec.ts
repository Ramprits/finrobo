/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InsurenceService } from './insurence.service';

describe('Service: Insurence', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsurenceService]
    });
  });

  it('should ...', inject([InsurenceService], (service: InsurenceService) => {
    expect(service).toBeTruthy();
  }));
});
