import { TestBed } from '@angular/core/testing';

import { SukokuLogicService } from './sukoku-logic.service';

describe('SukokuLogicService', () => {
  let service: SukokuLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SukokuLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
