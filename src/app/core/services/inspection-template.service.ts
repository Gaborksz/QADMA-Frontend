import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InspectionSearchCriteria } from '../../features/home/modules/inspection-management/model/inspection-search-criteria';
import { map, Observable } from 'rxjs';
import { InspectionTemplateDTO } from '../../features/home/modules/change-management/model/inspection-template-dto';
import { InspectionTemplate } from '../../features/home/modules/inspection-management/model/inspection-template';


@Injectable({
  providedIn: 'root'
})
export class InspectionTemplateService {

  private baseURL = 'http://localhost:8080'

  constructor(private http: HttpClient) { }


  searchInspectionTemplates(criteria: InspectionSearchCriteria): Observable<InspectionTemplate[]> {

    return this.http.post<InspectionTemplateDTO[]>(`${this.baseURL}/api/inspection-template/search`, criteria)
      .pipe(
        map((dtoList: InspectionTemplateDTO[]) => dtoList.map(dto => InspectionTemplate.fromDTO(dto)))
      );
  }
}