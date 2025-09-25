import { Component } from '@angular/core';
import { FormMode } from '../../../../core/model/form.mode.enum';
import { FormGroup } from '@angular/forms';
import { ChangeNoteService } from '../../../../core/services/change-note.service';
import { ProductChangeNote } from '../../../../features/home/modules/change-management/model/product-change-note';


@Component({
  selector: 'app-product-change-note-create',
  templateUrl: './product-change-note-create.component.html',
  styleUrl: './product-change-note-create.component.css'
})
export class ProductChangeNoteCreateComponent {

  mode = FormMode.Create;
  createForm = new FormGroup({});

  constructor(private changeNoteService: ChangeNoteService) {

    this.createForm.valueChanges.subscribe(() => {
      if (this.createForm.valid) {
        console.log(this.createForm.get('productChangeNote')?.getRawValue())
      }
    })
  }


  save() {
    const productChangeNote: ProductChangeNote = { ...this.createForm.get('productChangeNote')?.getRawValue() }

    this.changeNoteService.saveProductChangeNote(productChangeNote).subscribe(() => { });
  }
}
