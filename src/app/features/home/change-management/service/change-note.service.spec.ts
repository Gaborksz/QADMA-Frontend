import { TestBed } from '@angular/core/testing';

import { ChangeNoteService } from './change-note.service';

describe('ChangeNoteService', () => {
  let service: ChangeNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
