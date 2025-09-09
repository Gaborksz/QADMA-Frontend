import { Injectable } from '@angular/core';
import { ChangeNoteFormService } from './change-note-form.service';
import { ProductFormService } from '../../product-management/service/product-form.service';
import { FormGroup } from '@angular/forms';
import { ProductChangeNote } from '../model/product-change-note';

@Injectable({
  providedIn: 'root'
})
export class ProductChangeNoteFormService {

  productChangeNoteForm!: FormGroup


  constructor(
    private changeNoteFormService: ChangeNoteFormService,
    private productFormService: ProductFormService
  ) {

    this.productChangeNoteForm = new FormGroup({
      changeNoteForm: changeNoteFormService.changeNoteForm,
      product: productFormService.productForm
    })

    const productChangeNote = new ProductChangeNote();
    this.displayProductChangeNote(productChangeNote);
  }

  displayProductChangeNote(productChangeNote: ProductChangeNote) {
    if (productChangeNote != null) {
      if (productChangeNote.changeNote != null) {
        this.changeNoteFormService.displayChangeNote(productChangeNote.changeNote);
      }
      if (productChangeNote.product != null) {
        this.productFormService.displayProduct(productChangeNote.product);
      }
    }
    this.productChangeNoteForm.disable();
  }

  createProductChangeNote() {
    this.productChangeNoteForm.enable();
    this.changeNoteFormService.createChangeNote();
    this.productFormService.createProduct();
  }
}
