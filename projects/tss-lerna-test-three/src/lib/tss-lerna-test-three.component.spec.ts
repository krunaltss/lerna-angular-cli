import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TssLernaTestThreeComponent } from './tss-lerna-test-three.component';

describe('TssLernaTestThreeComponent', () => {
  let component: TssLernaTestThreeComponent;
  let fixture: ComponentFixture<TssLernaTestThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TssLernaTestThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TssLernaTestThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
