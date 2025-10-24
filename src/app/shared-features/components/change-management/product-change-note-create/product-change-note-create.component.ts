import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormMode } from '../../../../core/model/form.mode.enum';
import { AuthService } from '../../../../core/modules/auth/services/auth.service';
import { MessageBoardService } from '../../../../core/services/message-board.service';
import { ChangeNote } from '../../../../features/home/modules/change-management/model/change-note';
import { ProductChangeNote } from '../../../../features/home/modules/change-management/model/product-change-note';
import { Product } from '../../../../features/home/modules/product-management/model/product';
import { ProductChangeNoteService } from '../../../../core/services/product-change-note.service';



@Component({
  selector: 'app-product-change-note-create',
  templateUrl: './product-change-note-create.component.html',
  styleUrl: './product-change-note-create.component.css'
})
export class ProductChangeNoteCreateComponent {

  mode = FormMode.Create;
  createForm = new FormGroup({});
  productChangeNote: ProductChangeNote | null;


  constructor(
    private authService: AuthService,
    private productChangeNoteService: ProductChangeNoteService,
    private messageBoardService: MessageBoardService
  ) {
    this.productChangeNote = this.getEmptyProductChangeNote();
  }


  save() {
    const productChangeNote: ProductChangeNote = ProductChangeNote.fromFormValue(this.createForm.get('productChangeNote')?.getRawValue())

    this.productChangeNoteService.saveProductChangeNote(productChangeNote).subscribe(() => {

      this.productChangeNote = this.getEmptyProductChangeNote();

      this.messageBoardService.displayMessage({
        value: productChangeNote,
        operation: "Creation",
        date: new Date(Date.now())
      })
    });
  }


  private getEmptyProductChangeNote() {

    const product = new Product(0, 0, '', 1,
      new Date(), this.authService.currentUserValue,
      new Date(), this.authService.currentUserValue);

    const changeNote = new ChangeNote(0, '', new Date(), this.authService.currentUserValue);

    return new ProductChangeNote(changeNote, product);
  }
}
