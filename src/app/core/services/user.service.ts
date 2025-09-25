import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QadmaUser } from '../model/qadma-user';
import { QadmaUserDTO } from '../model/qadma-user-dto';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  findUsersBySearchTerm(searchTerm: string): Observable<QadmaUser[]> {
    return this.http.post<QadmaUserDTO[]>(`${this.baseUrl}/api/user/searchterm`, searchTerm)
      .pipe(
        map((userDTOs: any[]) => userDTOs.map(userDTO => QadmaUser.fromDTO(userDTO)))
      );
  }

  findUserById(id: number): Observable<QadmaUser> {
    return this.http.get<QadmaUserDTO>(`${this.baseUrl}/api/user/${id}`)
      .pipe(
        map(userDto => QadmaUser.fromDTO(userDto))
      );
  }
}
