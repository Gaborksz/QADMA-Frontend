import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionTemplateChangeNoteComponent } from './inspection-template-change-note.component';

describe('InspectionTemplateChangeNoteComponent', () => {
  let component: InspectionTemplateChangeNoteComponent;
  let fixture: ComponentFixture<InspectionTemplateChangeNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectionTemplateChangeNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionTemplateChangeNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
