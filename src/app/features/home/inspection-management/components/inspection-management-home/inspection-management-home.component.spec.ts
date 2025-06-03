import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionManagementHomeComponent } from './inspection-management-home.component';

describe('InspectionManagementHomeComponent', () => {
  let component: InspectionManagementHomeComponent;
  let fixture: ComponentFixture<InspectionManagementHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectionManagementHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
