import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {ServerRoutes} from '../routes/ServerRoutes';
import {LocalStorage} from '../routes/LocalStorage';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  static hasToken(): boolean {
    if (localStorage.getItem(LocalStorage.currentUser)) {
      return true;
    }
    return false;
  }

  login(username: string, password: string) {
    return this.http.post<any>(ServerRoutes.login, {email: username, password: password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          console.log('successfully acquired token' + user.token);
          const tkn = JSON.stringify(user.token);
          localStorage.setItem(LocalStorage.currentUser, tkn);
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
