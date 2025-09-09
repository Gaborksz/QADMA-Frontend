import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductChangeNoteFormService } from '../../service/product-change-note-form.service';

@Component({
  selector: 'app-product-change-note-form',
  templateUrl: './product-change-note-form.component.html',
  styleUrl: './product-change-note-form.component.css'
})
export class ProductChangeNoteFormComponent {

  productChangeNoteForm!: FormGroup


  constructor(private productChangeNoteFormService: ProductChangeNoteFormService) {
    this.productChangeNoteForm = productChangeNoteFormService.productChangeNoteForm
  }


  getFormGroup(formGroupName: string): FormGroup {
    return this.productChangeNoteForm.get(formGroupName) as FormGroup;
  }

  save() {
    console.log("saving Product Change Note")
  }
}
