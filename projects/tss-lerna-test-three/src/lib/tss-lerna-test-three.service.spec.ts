import { TestBed, inject } from '@angular/core/testing';

import { TssLernaTestThreeService } from './tss-lerna-test-three.service';

describe('TssLernaTestThreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TssLernaTestThreeService]
    });
  });

  it('should be created', inject([TssLernaTestThreeService], (service: TssLernaTestThreeService) => {
    expect(service).toBeTruthy();
  }));
});
