import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNoSearchResultComponent } from './product-no-search-result.component';

describe('ProductNoSearchResultComponent', () => {
  let component: ProductNoSearchResultComponent;
  let fixture: ComponentFixture<ProductNoSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductNoSearchResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNoSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
