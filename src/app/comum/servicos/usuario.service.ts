import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Usuario } from '../class/usuario';

@Injectable()
export class UsuarioService {

  private lugar = 'assets/dados/produto.json';

  constructor(private http: Http) { }

  getUsuario(): Observable<Usuario[]> {
    return this.http
        .get(this.lugar)
        .map(dados => dados.json());
   // return this.resposta;
  }

  insertUsuario(usuario: Usuario) {
    this.http.post('https://httpbin.org/post', JSON.stringify(usuario))
        .map(res => res)
        .subscribe(dados => {
          console.log(dados);
          // reseta o for
        }, (error: any) => alert('error'));
  }

}
