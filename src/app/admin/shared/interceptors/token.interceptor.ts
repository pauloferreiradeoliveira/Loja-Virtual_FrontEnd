
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Token } from '../model/token';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  //  Middware para os https
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const requestUrl: Array<any> = request.url.split('/');
    const apiUrl: Array<any> = environment.siteApi.split('/');
    const token: Token = JSON.parse(localStorage.getItem('token'));

    if (token && (requestUrl[2] === apiUrl[2])) {
      const newResquest = request.clone({ setHeaders: {'Authorization': `${token.token_type} ${token.access_token}`}});
      return next.handle(newResquest);
    } else {
    return next.handle(request);
    }
  }
}
