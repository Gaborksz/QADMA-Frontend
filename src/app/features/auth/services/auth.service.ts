import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { QadmaUser } from '../model/qadma-user';
import { SignInCredential } from '../model/signin-credential';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseUrl = 'http://localhost:8080';
  private currentUser$ = new BehaviorSubject<QadmaUser | null>(null);


  constructor(private http: HttpClient) { }


  signIn(loginCredentials: SignInCredential): Observable<QadmaUser> {
    return this.http.post<QadmaUser>(`${this.baseUrl}/api/auth/signin`, loginCredentials)
      .pipe(
        tap(user => {
          if (user?.id > 0) {
            this.currentUser$.next(user);
          }
        })
      );
  }

  isSignedIn(): Observable<QadmaUser> {
    return this.http.get<QadmaUser>(`${this.baseUrl}/api/auth/signedin`);
  }

  signUp(signUpCredentials: SignInCredential): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/api/auth/signup`, signUpCredentials);
  }

  isUserNameAvaliable(userName: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/api/auth/user-name`, userName);
  }

  findUsersBySearchTerm(searchTerm: string): Observable<QadmaUser[]> {
    return this.http.post<QadmaUser[]>(`${this.baseUrl}/api/user/searchterm`, searchTerm);
  }

  get signedInUser$() {
    return this.currentUser$.asObservable();
  }

  get signedInUserValue() {
    return this.currentUser$.getValue();
  }
}