import { TestBed } from '@angular/core/testing';

import { ProductChangeNoteFormService } from './product-change-note-form.service';

describe('ProductChangeNoteFormService', () => {
  let service: ProductChangeNoteFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductChangeNoteFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
