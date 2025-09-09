import { TestBed } from '@angular/core/testing';

import { ProductChangeNoteService } from './product-change-note.service';

describe('ProductChangeNoteService', () => {
  let service: ProductChangeNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductChangeNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
