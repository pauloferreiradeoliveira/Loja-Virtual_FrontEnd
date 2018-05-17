import { Component, OnInit, OnDestroy } from '@angular/core';
import { Funcionario } from '../shared/model/funcionario';
import { Subscription } from 'rxjs';
import { FuncionarioService } from '../shared/servicos/funcionario.service';



@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit, OnDestroy {

  dados: Funcionario[] = [];
  subcripiton: Subscription;

  filtro: string;

  constructor(
    private service: FuncionarioService
  ) {}

  ngOnInit() {
    console.log();

    this.subcripiton = this.service
      .getFuncionarios()
      .subscribe(data => (this.dados = data));
  }

  ngOnDestroy() {
    this.subcripiton.unsubscribe();
  }

  // Para poder aplicar filtro
  getDados() {
    if (this.dados.length === 0 || this.filtro === undefined) {
      return this.dados;
    }

    // aplicando filtro
    return this.dados.filter(v => {
      if (v.name.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

}
