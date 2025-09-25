import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionPlanFormComponent } from './inspection-plan-form.component';

describe('InspectionPlanFormComponent', () => {
  let component: InspectionPlanFormComponent;
  let fixture: ComponentFixture<InspectionPlanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectionPlanFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
