import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductChangeNote } from '../../features/home/modules/change-management/model/product-change-note';
import { ProductChangeNoteDTO } from '../../features/home/modules/change-management/model/product-change-note-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductChangeNoteService {

  private baseUrl = 'http://localhost:8080'


  constructor(private http: HttpClient) { }


  saveProductChangeNote(productChangeNote: ProductChangeNote): Observable<ProductChangeNote> {

    const productChangeNoteDTO = ProductChangeNote.toDTO(productChangeNote);

    return this.http.post<ProductChangeNoteDTO>(`${this.baseUrl}/api/product-change-note`, productChangeNoteDTO)
      .pipe(
        map((dto: ProductChangeNoteDTO) => ProductChangeNote.fromDTO(dto))
      )
  }
}
