import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Categorias } from '../../comum/class/categoria';

@Injectable()
export class CategoriasService {

  private apiCategoria = `${environment.siteApi}categoria`;

  constructor(private http: HttpClient) { }

  getCadegorias(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(this.apiCategoria);
  }

  getCadegoria(id: number): Observable<Categorias> {
    // console.log(id);
    return this.http.get<Categorias>(`${this.apiCategoria}/${id}`);
  }

  addCadegoria(categoria: Categorias): Observable<any> {
    return this.http.post<any>(this.apiCategoria, categoria);
  }

  editCadegoria(categoria: Categorias, id: number): Observable<any> {
    return this.http.put<any>(`${this.apiCategoria}/${id}`, categoria);
  }

  deletarCategoria(id: number) {
    return this.http.delete<any>(`${this.apiCategoria}/${id}`);
  }

}
