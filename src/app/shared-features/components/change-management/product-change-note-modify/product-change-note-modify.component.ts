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
    const product: Product = this.route.snapshot.data['product'];
    this.productChangeNote = new ProductChangeNote(this.createBlankChangeNote(), product);
  }


  save() {
    const productChangeNote: ProductChangeNote = ProductChangeNote.fromFormValue(this.modifyForm.get('productChangeNote')?.getRawValue())

    if (this.modifyForm.valid) {
      productChangeNote.product.revision++;
      if (productChangeNote.changeNote.dateCreated) { productChangeNote.product.dateModified = productChangeNote.changeNote.dateCreated; }

      if (productChangeNote.changeNote.createdBy) { productChangeNote.product.modifiedBy = productChangeNote.changeNote.createdBy; }
    }

    this.productChangeNoteService.saveProductChangeNote(productChangeNote).subscribe((productChangeNote) => {

      if (productChangeNote.product) {
        this.messageBoardService.displayMessage({
          className: Product.name,
          value: `${productChangeNote.product.partNumber} - ${productChangeNote.product.productName} `,
          operation: "Modification",
          date: new Date(Date.now())
        })
      }

      if (this.productChangeNote) {

        const product = productChangeNote.product;
        const changeNote = this.createBlankChangeNote();

        this.productChangeNote = { ...productChangeNote, product, changeNote }
      }
    });
  }


  private createBlankChangeNote(): ChangeNote {
    return new ChangeNote(0, '', new Date(), this.authService.currentUserValue);
  }
}
