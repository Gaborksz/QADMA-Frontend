import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { ProductChangeNote } from '../model/product-change-note';
import { ProductChangeNoteDTO } from '../model/product-change-note-dto';
import { AuthService } from '../../../auth/services/auth.service';
import { ProductFormService } from '../../product-management/service/product-form.service';

@Injectable({
  providedIn: 'root'
})
export class ProductChangeNoteService {

  private baseUrl = 'http://localhost:8080';

  private productChangeNote!: BehaviorSubject<ProductChangeNote>;
  productChangeNote$: Observable<ProductChangeNote>;


  constructor(
    private http: HttpClient, private authService: AuthService
  ) {

    const productChangeNote = new ProductChangeNote();
    this.authService.currentUser$.subscribe(user => {
      productChangeNote.changeNote.createdBy = user;
    })

    this.productChangeNote = new BehaviorSubject(productChangeNote);
    this.productChangeNote$ = this.productChangeNote.asObservable();
  }

  getProductChangeNote(id: number): Observable<ProductChangeNote> {

    const ids = [id];

    return this.http.post<ProductChangeNoteDTO[]>(`${this.baseUrl}/api/product-change-note/ids`, ids)
      .pipe(
        map(dtos => dtos[0]),
        map(dto => ProductChangeNote.fromDTO(dto)),
        tap(productChangeNote => {
          this.productChangeNote.next(productChangeNote);
        })
      );
  }
}
