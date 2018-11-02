import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ServerRoutes} from '../routes/ServerRoutes';
import {LocalStorage} from '../routes/LocalStorage';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  signUp(username: string, password: string) {
    return this.http.post<any>(ServerRoutes.register, {email: username, password: password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          console.log('successfully acquired token' + user.token);
          localStorage.setItem(LocalStorage.currentUser, JSON.stringify(user.token));
        }

        return user;
      }));
  }
}
