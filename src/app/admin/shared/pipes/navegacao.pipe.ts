import { Pipe, PipeTransform } from '@angular/core';
import { Navegacao } from '../model/navegacao.enum';

@Pipe({
  name: 'navegacao'
})
export class NavegacaoPipe implements PipeTransform {

  transform(value: Navegacao, args?: any): any {
    switch (value) {
      case Navegacao.Categoria:
        return 'Categoria';
      case Navegacao.Cliente:
        return 'Cliente';
      case Navegacao.Funcionario:
        return 'Funcinario';
      case Navegacao.Empresa:
        return 'Empresa';
      case Navegacao.Permissões:
        return 'Permissões';
      case Navegacao.Produtos:
        return 'Produtos';
      case Navegacao.Vendas:
        return 'Vendas';
      default:
        return '';
    }
  }
}
