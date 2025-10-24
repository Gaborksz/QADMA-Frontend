import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionPlanComponent } from './inspection-plan.component';

describe('InspectionPlanComponent', () => {
  let component: InspectionPlanComponent;
  let fixture: ComponentFixture<InspectionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectionPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
