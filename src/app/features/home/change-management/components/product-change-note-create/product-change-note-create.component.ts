import { Component } from '@angular/core';
import { ProductChangeNoteService } from '../../service/product-change-note.service';
import { ProductChangeNoteFormService } from '../../service/product-change-note-form.service';

@Component({
  selector: 'app-product-change-note-create',
  templateUrl: './product-change-note-create.component.html',
  styleUrl: './product-change-note-create.component.css'
})
export class ProductChangeNoteCreateComponent {


  constructor(
    private productChangeNoteService: ProductChangeNoteService,
    private productChnageNoteFormService: ProductChangeNoteFormService
  ) { }

  ngOnInit() {
    this.productChnageNoteFormService.createProductChangeNote();
  }
}
