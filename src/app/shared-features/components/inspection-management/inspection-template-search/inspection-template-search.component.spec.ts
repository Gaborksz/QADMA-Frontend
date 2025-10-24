import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionTemplateSearchComponent } from './inspection-template-search.component';

describe('InspectionTemplateSearchComponent', () => {
  let component: InspectionTemplateSearchComponent;
  let fixture: ComponentFixture<InspectionTemplateSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectionTemplateSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionTemplateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
