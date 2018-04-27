import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Categorias } from '../../comum/class/categoria.class';
import { CategoriasService } from '../../comum/servicos/categorias.service';
import { Produto } from '../../comum/class/produto';
import { CarrinhoService } from '../comum/servicos/carrinho.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // Variaveis
  categorias: Categorias[] = null;
  produtos: Produto[];
  isCollapsed = false;
  // Subscription: para poder destruir
  subCatergorias: Subscription;
  subCarrinho: Subscription;

  constructor(
    private cat: CategoriasService,
    private carrinhoSevice: CarrinhoService,
    private router: Router
  ) {}

  // Ciclo
  ngOnInit() {
    this.pegandoCategorias();
    this.mostarOuNao();
    // Se os produtos mudar - Acionarar um Evento - Informandos a todos
    this.subCarrinho = CarrinhoService.emitirProdutoAdicionado.subscribe(
      produtoAdd => (this.produtos = produtoAdd)
    );
  }
  // Boas Particas
  ngOnDestroy() {
    this.subCatergorias.unsubscribe();
    this.subCarrinho.unsubscribe();
  }
  // Fim - Ciclo

  mostarOuNao() {
    if (window.matchMedia('only screen and (max-width: 768px)').matches) {
      this.isCollapsed = !this.isCollapsed;
    } else {
      this.isCollapsed = false;
    }
  }

  pegandoCategorias() {
    this.subCatergorias = this.cat
      .getCadegorias()
      .subscribe(dados => (this.categorias = dados));
  }

  getValorTotal(): number {
    let valor = 0;
    if (!(this.produtos == null)) {
      for (const produto of this.produtos) {
        valor += produto.preco;
      }
    }
    return valor;
  }

  // Rotas

  direcionarCategoria(id: number) {
    this.router.navigate(['/categoria', id]);
  }

  direcionarPrincipal() {
    this.router.navigate(['']);
  }

  direcionarLogin() {
    this.router.navigate(['/formularios/login']);
  }

  direcionarCadastrar() {
    this.router.navigate(['/formularios/cadastrar']);
  }

  // Fim Rotas
}
