import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, map } from 'rxjs';


import { SignInCredential } from '../model/signin-credential';
import { QadmaUser } from '../../../model/qadma-user';
import { QadmaUserDTO } from '../../../model/qadma-user-dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseUrl = 'http://localhost:8080';
  private currentUser = new BehaviorSubject<QadmaUser>(new QadmaUser);
  currentUser$ = this.currentUser.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  signIn(loginCredentials: SignInCredential): Observable<QadmaUser> {
    return this.http.post<QadmaUserDTO>(`${this.baseUrl}/api/auth/signin`, loginCredentials)
      .pipe(
        map(user => QadmaUser.fromDTO(user)),
        tap(user => {
          if (user?.id > 0) {
            this.currentUser.next(user);
          }
        })
      );
  }


  isSignedIn(): Observable<QadmaUser> {
    return this.http.get<QadmaUserDTO>(`${this.baseUrl}/api/auth/signedin`)
      .pipe(
        map(user => QadmaUser.fromDTO(user)),
        tap(user => {
          if (user?.id > 0) {
            this.currentUser.next(user);
          }
        })
      );;
  }


  signUp(signUpCredentials: SignInCredential): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/api/auth/signup`, signUpCredentials);
  }


  signOut() {
    this.http.get<any>(`${this.baseUrl}/api/auth/signout`).subscribe(() => {
      this.router.navigateByUrl('/')
    })
  }


  isUserNameAvaliable(userName: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/api/auth/user-name`, userName);
  }


  get currentUserValue(): QadmaUser {
    return this.currentUser.value;
  }
}