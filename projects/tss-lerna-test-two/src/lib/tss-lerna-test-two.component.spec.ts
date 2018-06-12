import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TssLernaTestTwoComponent } from './tss-lerna-test-two.component';

describe('TssLernaTestTwoComponent', () => {
  let component: TssLernaTestTwoComponent;
  let fixture: ComponentFixture<TssLernaTestTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TssLernaTestTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TssLernaTestTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
