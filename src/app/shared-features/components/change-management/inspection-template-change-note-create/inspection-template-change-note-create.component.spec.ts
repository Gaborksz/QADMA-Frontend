import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionTemplateChangeNoteCreateComponent } from './inspection-template-change-note-create.component';

describe('InspectionTemplateChangeNoteCreateComponent', () => {
  let component: InspectionTemplateChangeNoteCreateComponent;
  let fixture: ComponentFixture<InspectionTemplateChangeNoteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectionTemplateChangeNoteCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionTemplateChangeNoteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
