import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Categorias } from '../../comum/class/categoria.class';
import { CategoriasService } from '../../comum/servicos/categorias.service';
import { Produto } from '../../comum/class/produto';
import { CarrinhoService } from '../comum/servicos/carrinho.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  categorias: Categorias[] = null;
  subCatergorias: Subscription;
  subCarrinho: Subscription;
  produtos: Produto[];
  isCollapsed = false;

  constructor(private cat: CategoriasService, private carrinhoSevice: CarrinhoService) { }

  ngOnInit() {
   this.pegandoCategorias();
   this.mostarOuNao();
   // Se os produtos mudar - Acionarar um Evento - Informandos a todos
   this.subCarrinho = CarrinhoService.emitirProdutoAdicionado.subscribe(
     produtoAdd => this.produtos = produtoAdd
   );
  }
  // Boas Particas
  ngOnDestroy() {
    this.subCatergorias.unsubscribe();
    this.subCarrinho.unsubscribe();
  }

  mostarOuNao() {
    if (window.matchMedia('only screen and (max-width: 768px)').matches) {
       this.isCollapsed = !this.isCollapsed;
      } else {
      this.isCollapsed = false;
    }
  }

  pegandoCategorias() {
    this.subCatergorias = this.cat.getCadegorias().subscribe(
      dados => this.categorias = dados
    );
  }





}
