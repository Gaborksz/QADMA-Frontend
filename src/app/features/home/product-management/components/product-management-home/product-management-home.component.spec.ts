import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagementHomeComponent } from './product-management-home.component';

describe('ProductManagementHomeComponent', () => {
  let component: ProductManagementHomeComponent;
  let fixture: ComponentFixture<ProductManagementHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductManagementHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
