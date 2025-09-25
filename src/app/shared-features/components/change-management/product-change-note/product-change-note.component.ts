import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormMode } from '../../../../core/model/form.mode.enum';
import { ProductChangeNote } from '../../../../features/home/modules/change-management/model/product-change-note';


@Component({
  selector: 'app-product-change-note',
  templateUrl: './product-change-note.component.html',
  styleUrl: './product-change-note.component.css'
})
export class ProductChangeNoteComponent {

  @Input() mode = FormMode.Display;
  @Input() productChangeNote = new ProductChangeNote();
  @Input() parentForm!: FormGroup;

  productChangeNoteForm = new FormGroup({});


  ngOnInit() {
    if (this.parentForm) {
      this.parentForm.addControl('productChangeNote', this.productChangeNoteForm)
    }
  }
}
