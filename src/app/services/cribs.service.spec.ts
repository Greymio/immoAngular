import { Http } from '@angular/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CribsService } from './cribs.service';

describe('CribsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CribsService],
    });
  });

  it('should inject cribService', inject([CribsService], (service: CribsService) => {
    expect(service).toBeTruthy();
  }));
});
