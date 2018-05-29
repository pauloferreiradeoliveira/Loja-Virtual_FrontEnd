import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Credencial } from '../model/credencial';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Funcionario } from '../model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private router: Router
  ) { }

  check(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  login(credencial: Credencial): Promise<boolean> {
    return this.http.post<any>(`${environment.siteApi}auth/login`, credencial)
      .toPromise()
      .then( data => {
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('user', btoa(JSON.stringify(data.usuario)));
        return true;
      }
    );

  }

  logout(): void {
    this.http.get(`${environment.siteApi}auth/logout`)
      .subscribe(
        resposta => {
          console.log(resposta);
          localStorage.clear();
          this.router.navigate(['auth/login']);
        }
      );
  }

  getUser(): Funcionario | null {
    return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
  }

  setUser(): Promise<boolean> {
    return this.http.get<any>(`${environment.siteApi}auth/me`).toPromise().
    then(data => {
      if (data.usuario) {
        localStorage.setItem('user', btoa(JSON.stringify(data.usuario)));
        return true;
      }
      return false;
    }
    );
  }
}
