import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChangeNoteCreateComponent } from './product-change-note-create.component';

describe('ProductChangeNoteCreateComponent', () => {
  let component: ProductChangeNoteCreateComponent;
  let fixture: ComponentFixture<ProductChangeNoteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductChangeNoteCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductChangeNoteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
