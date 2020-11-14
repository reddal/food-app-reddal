import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntCounterComponent } from './int-counter.component';

describe('IntCounterComponent', () => {
  let component: IntCounterComponent;
  let fixture: ComponentFixture<IntCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
