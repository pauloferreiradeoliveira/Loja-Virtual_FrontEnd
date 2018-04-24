import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinheiroPipe } from './pipes/dinheiro.pipe';
import { CategoriasService } from './servicos/categorias.service';
import { ProdutosService } from './servicos/produtos.service';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DinheiroPipe],
  exports: [DinheiroPipe],
  providers: [
    CategoriasService,
    ProdutosService
  ]
})
export class ComumMmodule { }
