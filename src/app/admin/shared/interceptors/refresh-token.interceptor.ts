
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';



@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  //  Middware para os https
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((erroResponse: HttpEvent<HttpErrorResponse>) => {

      const erro = erroResponse;
        console.log(erroResponse);
        return throwError(erro);
      })
    );
  }

}

/*  catchError(
      (erroResponse: HttpErrorResponse) => {
        const erro = (typeof erroResponse.error !== 'object') ? JSON.parse(erroResponse.error) : erroResponse.error;

        if (erroResponse.status === 401 && erro.erro === 'Token has expired') {
          const http = this.injector.get(HttpClient);

          return http.post<any>(`${environment.siteApi}/auth/refresh`, {})
            .pipe()
            .mergeMap(data => {
              localStorage.setItem('token', JSON.stringify(data));
              const cloneResquest = request.clone({
                setHeaders: {'Authorization': `${data.token_type} ${data.access_token}`}
              });
              return next.handle(cloneResquest);
            });
        }
        return Observable.throw(erroResponse);
      }
    )*/
