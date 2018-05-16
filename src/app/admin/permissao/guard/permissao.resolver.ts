import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TipoUser } from '../../shared/model/tipo-user';
import { PermissaoService } from '../../shared/servicos/permissao.service';



@Injectable()
export class PermissaoResolver implements Resolve<TipoUser> {

  constructor(private Service: PermissaoService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    const id  = route.params['id'];
    return this.Service.getTitpoUser(id);
  }



}
