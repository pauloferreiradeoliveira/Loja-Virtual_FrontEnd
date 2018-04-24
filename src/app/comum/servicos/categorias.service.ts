import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Categorias } from '../../comum/class/categoria.class';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriasService {

  private lugar = 'assets/dados/categorias.json';

  constructor(private http: Http) { }

  getCadegorias(): Observable<Categorias[]> {
    return this.http
        .get(this.lugar)
        .map(dados => dados.json());
   // return this.resposta;
  }

}
