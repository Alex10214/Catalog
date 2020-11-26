import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    login(): Observable<any> {
      return this.http.get('assets/user.json')
      .pipe(
        tap(this.setToken)
      );
    }

    logout(): any {
    }

    private setToken(response): any {
      console.log('RESPONS', response);
    }
  }

