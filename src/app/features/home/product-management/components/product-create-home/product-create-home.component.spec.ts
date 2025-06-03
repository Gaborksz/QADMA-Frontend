import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateHomeComponent } from './product-create-home.component';

describe('ProductCreateHomeComponent', () => {
  let component: ProductCreateHomeComponent;
  let fixture: ComponentFixture<ProductCreateHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCreateHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCreateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
