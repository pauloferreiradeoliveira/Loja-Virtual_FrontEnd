import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Endereco } from '../class/endereco';

@Injectable()
export class EnderecoService {

  private lugar = 'assets/dados/produto.json';

  constructor(private http: Http) { }

  getEstados() {

  }

  consultaCEP(cep):  Observable<Endereco> {
    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
     const validacep = /^[0-9]{8}$/;
     if (validacep.test(cep)) {
       // Buscar os Dados
       return this.http.get(`https://viacep.com.br/ws/${cep}/json`)
         .map(dados => dados.json());
     }
    }
    return null;
   }


}
