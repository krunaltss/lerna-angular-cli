import { TestBed, inject } from '@angular/core/testing';

import { TssLernaTestOneService } from './tss-lerna-test-one.service';

describe('TssLernaTestOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TssLernaTestOneService]
    });
  });

  it('should be created', inject([TssLernaTestOneService], (service: TssLernaTestOneService) => {
    expect(service).toBeTruthy();
  }));
});
