import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormMode } from '../../../../core/model/form.mode.enum';
import { ProductChangeNote } from '../../../../features/home/modules/change-management/model/product-change-note';
import { ChangeNote } from '../../../../features/home/modules/change-management/model/change-note';
import { Product } from '../../../../features/home/modules/product-management/model/product';


@Component({
  selector: 'app-product-change-note',
  templateUrl: './product-change-note.component.html',
  styleUrl: './product-change-note.component.css'
})
export class ProductChangeNoteComponent {

  @Input() mode = FormMode.Display;
  @Input() productChangeNote!: ProductChangeNote | null;
  @Input() parentForm!: FormGroup;

  productChangeNoteForm = new FormGroup({});
  changeNote!: ChangeNote | null;
  product!: Product | null;


  constructor() { }


  ngOnInit() {

    if (this.parentForm) { this.parentForm.addControl('productChangeNote', this.productChangeNoteForm); }

    if (this.productChangeNote != null) {
      if (this.productChangeNote.changeNote) { this.changeNote = this.productChangeNote.changeNote; }
      if (this.productChangeNote.product) { this.product = this.productChangeNote.product; }
    }
  }

  ngOnChanges(changes: SimpleChanges) {

    const productChangeNote = changes['productChangeNote'].currentValue;

    if (productChangeNote) {
      if (productChangeNote.changeNote) { this.changeNote = productChangeNote.changeNote; }
      if (productChangeNote.product) { this.product = productChangeNote.product; }
    }
  }
}
