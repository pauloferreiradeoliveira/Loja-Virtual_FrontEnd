import { Component, OnInit, OnDestroy } from '@angular/core';
import { TipoUser } from '../shared/model/tipo-user';
import { Subscription } from 'rxjs';
import { PermissaoService } from '../shared/servicos/permissao.service';

@Component({
  selector: 'app-permissao',
  templateUrl: './permissao.component.html',
  styleUrls: ['./permissao.component.scss']
})
export class PermissaoComponent implements OnInit, OnDestroy {

  tipoUser: TipoUser[] = [];
  tipoUserSubcripiton: Subscription;

  filtro: string;

  constructor(private permissaoService: PermissaoService) { }

  ngOnInit() {
    this.tipoUserSubcripiton = this.permissaoService.getTipoUsers().subscribe(
      (data) => this.tipoUser = data
    );
  }

  ngOnDestroy() {
    this.tipoUserSubcripiton.unsubscribe();
  }

  // Para poder aplicar filtro
  pegarCadegorias() {

    if (this.tipoUser.length === 0 || this.filtro === undefined) {
      return this.tipoUser;
    }

    // aplicando filtro
    return this.tipoUser.filter(
      (v) => {
       if ( v.nome.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
         return true;
       }
       return false;
      }
    );
  }
}
