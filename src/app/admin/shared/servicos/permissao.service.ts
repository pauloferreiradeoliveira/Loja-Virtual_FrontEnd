import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { TipoUser } from '../model/tipo-user';
import { Permissao } from '../model/permissao';

@Injectable({
  providedIn: 'root'
})
export class PermissaoService {

  private tipoUser = `${environment.siteApi}permissao`;
  // private permissao = `${this.tipoUser}/permissao`;

  constructor(private httpCliente: HttpClient) {}

  getTitpoUser(id: number) {
    return this.httpCliente.get<TipoUser>(`${this.tipoUser}/${id}`);
  }

  getTipoUsers(): Observable<TipoUser[]> {
    return this.httpCliente.get<TipoUser[]>(this.tipoUser);
  }

  getPermisao(id: number): Observable<Permissao[]> {
    return this.httpCliente.get<Permissao[]>(`${this.tipoUser}/tipos/${id}`);
  }

  insertTipoUser(tipo: TipoUser): Observable<any> {
    console.log(this.tipoUser);

    return this.httpCliente.post<any>(this.tipoUser, tipo);
  }

  uploadTipoUser(tipo: TipoUser, id: number) {
    return this.httpCliente.put<any>(`${this.tipoUser}/${id}`, tipo);
  }

  deleteTipoUser(id: number) {
    return this.httpCliente.delete(`${this.tipoUser}/${id}`);
  }

}
