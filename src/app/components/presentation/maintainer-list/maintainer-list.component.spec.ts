import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainerListComponent } from './maintainer-list.component';

describe('MaintainerListComponent', () => {
  let component: MaintainerListComponent;
  let fixture: ComponentFixture<MaintainerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaintainerListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
