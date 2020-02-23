import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityLevelComponent } from './capability-level.component';

describe('CapabilityLevelComponent', () => {
  let component: CapabilityLevelComponent;
  let fixture: ComponentFixture<CapabilityLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CapabilityLevelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilityLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
