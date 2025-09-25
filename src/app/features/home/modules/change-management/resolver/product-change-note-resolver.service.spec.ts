import { TestBed } from '@angular/core/testing';

import { ProductChangeNoteResolverService } from './product-change-note-resolver.service';

describe('ProductChangeNoteResolverService', () => {
  let service: ProductChangeNoteResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductChangeNoteResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
