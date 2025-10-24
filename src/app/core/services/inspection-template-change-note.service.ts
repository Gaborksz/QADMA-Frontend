import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InspectionTemplateChangeNote } from '../../features/home/modules/change-management/model/inspection-template-change-note';
import { map, Observable, tap } from 'rxjs';
import { InspectionTemplateChangeNoteDTO } from '../../features/home/modules/change-management/model/inspection_template_change_note_dto';

@Injectable({
  providedIn: 'root'
})
export class InspectionTemplateChangeNoteService {

  private baseURL = 'http://localhost:8080'

  constructor(private http: HttpClient) { }


  saveInspectionTemplateChangeNote(inspectionTemplateChangeNote: InspectionTemplateChangeNote): Observable<InspectionTemplateChangeNote> {

    const inspectionTemplateChangeNoteDTO = InspectionTemplateChangeNote.toDTO(inspectionTemplateChangeNote)

    return this.http.post<InspectionTemplateChangeNoteDTO>(
      `${this.baseURL}/api/inspection-template-change-note`, inspectionTemplateChangeNoteDTO
    ).pipe(
      map((dto: InspectionTemplateChangeNoteDTO) => InspectionTemplateChangeNote.fromDTO(dto)))
  }
}
