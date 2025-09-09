import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChangeNoteModifyComponent } from './product-change-note-modify.component';

describe('ProductChangeNoteModifyComponent', () => {
  let component: ProductChangeNoteModifyComponent;
  let fixture: ComponentFixture<ProductChangeNoteModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductChangeNoteModifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductChangeNoteModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
