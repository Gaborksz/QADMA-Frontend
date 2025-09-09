import { Component } from '@angular/core';
import { ProductChangeNoteService } from '../../service/product-change-note.service';

@Component({
  selector: 'app-product-change-note-modify',
  templateUrl: './product-change-note-modify.component.html',
  styleUrl: './product-change-note-modify.component.css'
})
export class ProductChangeNoteModifyComponent {


  constructor(private productChangeNoteService: ProductChangeNoteService) {

    
   }


   ngOnInit(){
    
   }
}
