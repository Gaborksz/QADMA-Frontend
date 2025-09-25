import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChangeNoteComponent } from './product-change-note.component';

describe('ProductChangeNoteComponent', () => {
  let component: ProductChangeNoteComponent;
  let fixture: ComponentFixture<ProductChangeNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductChangeNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductChangeNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
