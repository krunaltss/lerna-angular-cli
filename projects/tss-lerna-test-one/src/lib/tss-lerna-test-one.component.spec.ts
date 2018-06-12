import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TssLernaTestOneComponent } from './tss-lerna-test-one.component';

describe('TssLernaTestOneComponent', () => {
  let component: TssLernaTestOneComponent;
  let fixture: ComponentFixture<TssLernaTestOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TssLernaTestOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TssLernaTestOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
