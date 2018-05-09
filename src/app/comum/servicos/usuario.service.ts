import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../class/usuario';


@Injectable()
export class UsuarioService {

  private lugar = 'assets/dados/produto.json';

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<Usuario[]> {
    return this.http
        .get<Usuario[]>(this.lugar);

   // return this.resposta;
  }

  insertUsuario(dado): Observable<any> {
     return this.http
        .post('https://httpbin.org/post', JSON.stringify(dado));
  }

}
