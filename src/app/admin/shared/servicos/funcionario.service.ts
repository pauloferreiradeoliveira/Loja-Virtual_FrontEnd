import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Observable } from 'rxjs';
import { Funcionario } from '../model/funcionario';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

private lugar = `${environment.siteApi}funcionario`;
// private permissao = `${this.lugar}/permissao`;

constructor(private httpCliente: HttpClient) {}

getFuncionario(id: number): Observable<Funcionario> {
  return this.httpCliente.get<Funcionario>(`${this.lugar}/${id}`);
}

getFuncionarios(): Observable<Funcionario[]> {
  return this.httpCliente.get<Funcionario[]>(this.lugar);
}

insertFuncionario(funcionario: Funcionario): Observable<any> {
  return this.httpCliente.post<any>(this.lugar, funcionario);
}

uploadFuncionario(funcionario: Funcionario, id: number) {
  return this.httpCliente.put<any>(`${this.lugar}/${id}`, funcionario);
}

deleteFuncionario(id: number) {
  return this.httpCliente.delete(`${this.lugar}/${id}`);
}

}
