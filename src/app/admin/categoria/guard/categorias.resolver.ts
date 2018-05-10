import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Categorias } from '../../../comum/class/categoria';
import { CategoriasService } from '../../../comum/servicos/categorias.service';


@Injectable()
export class CategoriasResolver implements Resolve<Categorias> {

  constructor(private categoriaServive: CategoriasService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    const id  = route.params['id'];
    return this.categoriaServive.getCadegoria(id);
  }



}
