import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMaterialComponent } from './dashboard-material.component';

describe('DashboardMaterialComponent', () => {
  let component: DashboardMaterialComponent;
  let fixture: ComponentFixture<DashboardMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
