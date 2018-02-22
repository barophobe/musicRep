import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {User} from '../user.model';

@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  register(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/user', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  login(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/user/login', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

}
