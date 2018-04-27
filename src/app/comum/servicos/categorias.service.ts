import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Categorias } from '../../comum/class/categoria.class';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriasService {

  private lugar = 'assets/dados/categorias.json';
  private lugar1 = 'assets/dados/categoria.json';

  constructor(private http: Http) { }

  getCadegorias(): Observable<Categorias[]> {
    return this.http
        .get(this.lugar)
        .map(dados => dados.json());
   // return this.resposta;
  }

  getCadegoria(id: number): Observable<Categorias> {
    // console.log(id);
    return this.http
            .get(this.lugar1)
            .map(dados => dados.json());
  }
}
