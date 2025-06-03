import { TestBed } from '@angular/core/testing';

import { ProductSearchResolverService } from './product-search-resolver.service';

describe('ProductSearchResolverService', () => {
  let service: ProductSearchResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSearchResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
