import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { TipoUser } from '../shared/model/tipo-user';
import { PermissaoService } from '../shared/servicos/permissao.service';


@Component({
  selector: 'app-permissao',
  templateUrl: './permissao.component.html',
  styleUrls: ['./permissao.component.scss']
})
export class PermissaoComponent implements OnInit, OnDestroy {
  // Variaveis
  tipoUser: TipoUser[] = [];
  tipoUserSubcripiton: Subscription;

  children = false;
  filtro: string;

  constructor(
    private permissaoService: PermissaoService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log();

    this.tipoUserSubcripiton = this.permissaoService
      .getTipoUsers()
      .subscribe(data => (this.tipoUser = data));
  }

  ngOnDestroy() {
    this.tipoUserSubcripiton.unsubscribe();
  }

  getTamanho() {
    const tipo = (this.router.url === '/admin/permissoes');
    this.children = tipo;
    return {
      'col-md-11' : tipo,
      'col-md-6': !tipo
    };
  }

  // Para poder aplicar filtro
  getDados() {
    if (this.tipoUser.length === 0 || this.filtro === undefined) {
      return this.tipoUser;
    }

    // aplicando filtro
    return this.tipoUser.filter(v => {
      if (v.nome.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }
}
