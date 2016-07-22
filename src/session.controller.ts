import {Headers} from '@angular/http';
import {AuthConfig} from './auth.config.ts'

export class SessionController {
  static config:AuthConfig = new AuthConfig({
    globalHeaders: [{'Content-Type': 'application/json'}]
  });

  constructor() {
  }

  static userSignedIn():boolean {
    if(localStorage.getItem('Access-Token')) {
      var authHeaders:string[] = [];
      for(var attr in localStorage) {
        var header = {}
        authHeaders[attr] = attr;
        header[attr] = localStorage[attr];
        SessionController.config.globalHeaders.push(header);
      }

      this.config.authHeaders = authHeaders;
    }

    return this.getUserUid() !== null;
  }

  static getUserUid() {
    return localStorage.getItem('Uid');
  }

  static setUser(headers:Headers) {
    var authHeaders:string[] = [];

    headers['_headersMap'].forEach(function(value, key) {
      var config = {};
      config[key] = value;
      authHeaders[key] = key;
      SessionController.config.globalHeaders.push(config);
      localStorage.setItem(key, value);
    });

    this.config.authHeaders = authHeaders;
  }

  static removeUser() {
    this.config.authHeaders.forEach(header => localStorage.removeItem(header));
  }

  static renewAccess(headers:Headers) {
    [
      this.config['Access-Token'],
      this.config['Client'],
    ].forEach(header => localStorage.setItem(header, headers.get(header)));
  }

  static getAuthHeaders(): any[] {
    let headers = [];
    this.config.authHeaders.forEach(header => headers[header] = localStorage.getItem(header));

    return headers;
  }
}
