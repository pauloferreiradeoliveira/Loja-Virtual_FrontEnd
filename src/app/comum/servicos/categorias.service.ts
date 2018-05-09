import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Categorias } from '../../comum/class/categoria';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriasService {

  private lugar = 'assets/dados/categorias.json';
  private lugar1 = 'assets/dados/categoria.json';

  constructor(private http: HttpClient) { }

  getCadegorias(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(this.lugar);
  }

  getCadegoria(id: number): Observable<Categorias> {
    // console.log(id);
    return this.http.get<Categorias>(this.lugar1);
  }
}
