import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {AuthHttp} from './auth.http.ts';
import {SessionController} from './session.controller';

@Injectable()
export class AuthService {
  constructor(private http:AuthHttp, private endpoint:string) {
  }

  signUp(params:Object):Observable<Response> {
    return this.http.post(`${this.endpoint}/auth`, JSON.stringify(params))
  }

  signIn(params:Object):Observable<Response> {
    return this.http.post(`${this.endpoint}/auth/sign_in`, JSON.stringify(params))
      .do((response:Response) => {
        SessionController.setUser(response.headers);
      });
  }

  signOut():Observable<Response> {
    return this.http.delete(`${this.endpoint}/auth/sign_out`)
      .do(() => {
        SessionController.removeUser();
      });
  }

  validateToken():Observable<Response> {
    return this.http.get(`${this.endpoint}/auth/validate_token`);
  }
}
