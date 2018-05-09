import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Produto } from '../class/produto';


@Injectable()
export class ProdutosService {

   private lugar = 'assets/dados/produto.json';

  constructor(private http: HttpClient) { }

  getProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.lugar);
   // return this.resposta;
  }

  getProdutoCategoria(id: number): Observable<Produto[]> {

    return this.http.get<Produto[]>(this.lugar);
  }

}
