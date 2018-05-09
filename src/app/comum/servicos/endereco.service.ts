import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Endereco } from '../class/endereco';


@Injectable()
export class EnderecoService {

  private lugar = 'assets/dados/produto.json';

  constructor(private http: HttpClient) { }

  getEstados() {

  }

  consultaCEP(cep):  Observable<Endereco> {
    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
     const validacep = /^[0-9]{8}$/;
     if (validacep.test(cep)) {
       // Buscar os Dados
       return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json`);
     }
    }
    return null;
   }


}
