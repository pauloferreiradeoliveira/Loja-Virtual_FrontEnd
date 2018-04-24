import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Produto } from '../class/produto';

@Injectable()
export class ProdutosService {

   private lugar = 'assets/dados/produto.json';

  constructor(private http: Http) { }

  getProduto(): Observable<Produto[]> {
    return this.http
        .get(this.lugar)
        .map(dados => dados.json());
   // return this.resposta;
  }

}
