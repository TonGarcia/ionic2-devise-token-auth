import {provide, Provider} from '@angular/core';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import { AuthHttp } from './auth.http.ts';
import {AuthService} from './auth.service.ts';

export * from './auth.config.ts';
export * from './auth.http.ts';
export * from './auth.service.ts';
export * from './session.controller';

/**
 * Used to define the default Auth Endpoint location to be
 * used throughout an application.
 *
 * @param url
 * @returns {Provider}
 */
export const authService = (url: string): Provider => {
  return provide(AuthService, {
    useFactory: (http: AuthHttp) => {
      return new AuthService(http, url);
    },
    deps: [AuthHttp]
  });
};

/**
 * Default Providers
 *
 * @type {any[]|Provider[]}
 */
export const AUTH_PROVIDERS:any[] = [
  HTTP_PROVIDERS,
  provide(AuthHttp, {
    useFactory: (http: Http) => {
      return new AuthHttp(http);
    },
    deps: [Http]
  })
];
