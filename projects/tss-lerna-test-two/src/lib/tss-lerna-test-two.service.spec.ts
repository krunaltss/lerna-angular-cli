import { TestBed, inject } from '@angular/core/testing';

import { TssLernaTestTwoService } from './tss-lerna-test-two.service';

describe('TssLernaTestTwoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TssLernaTestTwoService]
    });
  });

  it('should be created', inject([TssLernaTestTwoService], (service: TssLernaTestTwoService) => {
    expect(service).toBeTruthy();
  }));
});
