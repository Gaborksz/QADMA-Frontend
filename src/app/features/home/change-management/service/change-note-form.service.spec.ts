import { TestBed } from '@angular/core/testing';

import { ChangeNoteFormService } from './change-note-form.service';

describe('ChangeNoteFormService', () => {
  let service: ChangeNoteFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeNoteFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
