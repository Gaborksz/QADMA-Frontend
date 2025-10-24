import { TestBed } from '@angular/core/testing';

import { InspectionTemplateChangeNoteService } from './inspection-template-change-note.service';

describe('InspectionTemplateChangeNoteService', () => {
  let service: InspectionTemplateChangeNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspectionTemplateChangeNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
