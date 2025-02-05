import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:8085/authenticate';
  private token = 'auth_token'; // key to store the token in local storage

  constructor( private http: HttpClient) { }

  // login method to authenticate the user
  login( email: string, password: string) : Observable<any> {
    return this.http.post<any> (this.authUrl, { email, password}).pipe(
      tap(response => {
        if( response.token ) {
          localStorage.setItem(this.token, response.token);
        }
      })
    );
  }

  // Get the token from local storage
  getToken(): string | null { // return string if token is present else null
    return localStorage.getItem(this.token);
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken(); // !! converts the value to boolean, if token is present it will return true else false
  }

  // Logout the user
  logout(): void {
    localStorage.removeItem(this.token);
  }


}
