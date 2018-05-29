import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AplicationErroHandle extends ErrorHandler {

  constructor(private injetor: Injector) {
    super();
  }

  handleError(erroResponse: HttpErrorResponse | any) {
    if (erroResponse instanceof HttpErrorResponse) {
      const error = (typeof erroResponse.error !== 'object') ? JSON.parse(erroResponse.error) : erroResponse.error;

      console.log(error);
      if (erroResponse.status === 401 && error.erro === 'Token has expired and can no longer be refreshed') {
        this.goToLogin();
      }
    }

    super.handleError(erroResponse);
  }

  goToLogin() {
    const router = this.injetor.get(Router);
    localStorage.clear();
    router.navigate(['admin/login']);
  }
}
