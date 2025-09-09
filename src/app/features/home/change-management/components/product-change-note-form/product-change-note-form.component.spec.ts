import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChangeNoteFormComponent } from './product-change-note-form.component';

describe('ProductChangeNoteFormComponent', () => {
  let component: ProductChangeNoteFormComponent;
  let fixture: ComponentFixture<ProductChangeNoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductChangeNoteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductChangeNoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
