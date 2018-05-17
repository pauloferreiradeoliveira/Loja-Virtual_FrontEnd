import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Funcionario } from '../../shared/model/funcionario';
import { FuncionarioService } from '../../shared/servicos/funcionario.service';



@Injectable()
export class FuncionarioResolver implements Resolve<Funcionario> {

  constructor(private service: FuncionarioService) { }

  // Pegando dados
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    const id  = route.params['id'];
    return this.service.getFuncionario(id);
  }



}
