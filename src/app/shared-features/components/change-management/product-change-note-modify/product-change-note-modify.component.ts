import { Component } from '@angular/core';
import { FormMode } from '../../../../core/model/form.mode.enum';
import { ProductChangeNote } from '../../../../features/home/modules/change-management/model/product-change-note';
import { ActivatedRoute } from '@angular/router';
import { ChangeNote } from '../../../../features/home/modules/change-management/model/change-note';
import { AuthService } from '../../../../core/modules/auth/services/auth.service';
import { Product } from '../../../../features/home/modules/product-management/model/product';
import { FormGroup } from '@angular/forms';
import { ProductChangeNoteService } from '../../../../core/services/product-change-note.service';
import { MessageBoardService } from '../../../../core/services/message-board.service';


@Component({
  selector: 'app-product-change-note-modify',
  templateUrl: './product-change-note-modify.component.html',
  styleUrl: './product-change-note-modify.component.css'
})
export class ProductChangeNoteModifyComponent {

  mode: FormMode = FormMode.Modify;
  productChangeNote!: ProductChangeNote | null;
  modifyForm = new FormGroup({});

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private productChangeNoteService: ProductChangeNoteService,
    private messageBoardService: MessageBoardService
  ) {

    const changeNote = new ChangeNote(0, '', new Date(), this.authService.currentUserValue)
    const product: Product = this.route.snapshot.data['product'];
    this.productChangeNote = new ProductChangeNote(changeNote, product);
  }


  save() {
    const productChangeNote: ProductChangeNote = ProductChangeNote.fromFormValue(this.modifyForm.get('productChangeNote')?.getRawValue())

    productChangeNote.product.revision++;
    if (productChangeNote.product.dateModified) { productChangeNote.changeNote.dateCreated; }
    if (productChangeNote.product.modifiedBy) { productChangeNote.changeNote.createdBy; }

    console.log(productChangeNote);

    this.productChangeNoteService.saveProductChangeNote(productChangeNote).subscribe(() => {

      this.messageBoardService.displayMessage({
        value: productChangeNote,
        operation: "Modification",
        date: new Date(Date.now())
      })
    });
  }
}
