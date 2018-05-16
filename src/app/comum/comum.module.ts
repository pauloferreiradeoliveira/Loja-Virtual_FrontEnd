import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinheiroPipe } from './pipes/dinheiro.pipe';
import { CategoriasService } from './servicos/categorias.service';
import { ProdutosService } from './servicos/produtos.service';
import { EnderecoService } from './servicos/endereco.service';
import { UsuarioService } from './servicos/usuario.service';

@NgModule({
  imports: [CommonModule],
  declarations: [DinheiroPipe],
  exports: [DinheiroPipe],
  providers: [
    CategoriasService,
    ProdutosService,
    EnderecoService,
    UsuarioService
  ]
})
export class ComumMmodule {}
