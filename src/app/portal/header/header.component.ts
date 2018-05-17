import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Categorias } from '../../comum/class/categoria';
import { CategoriasService } from '../../comum/servicos/categorias.service';
import { Produto } from '../../comum/class/produto';
import { CarrinhoService } from '../shared/servicos/carrinho.service';
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
  isCelularTable: boolean;
  carrinhoMostrando = true;
  loginMostrando = true;

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
    this.subCarrinho = this.carrinhoSevice.emitirProdutoAdicionado.subscribe(
      produto => (this.produtos = produto)
    );
    this.carrinhoSevice.getCarrinho();
  }
  // Boas Particas
  ngOnDestroy() {
    this.subCatergorias.unsubscribe();
    this.subCarrinho.unsubscribe();
  }
  // Fim - Ciclo

  mostarOuNao() {
    if (window.matchMedia('only screen and (max-width: 769px)').matches) {
      this.isCollapsed = !this.isCollapsed;
      this.isCelularTable = true;
    } else {
      this.isCollapsed = false;
      this.isCelularTable = false;
    }
  }

  pegandoCategorias() {
    this.subCatergorias = this.cat
      .getCadegorias()
      .subscribe(dados => (this.categorias = dados));
  }

  // Rotas

  dropdrawCarrinho() {
    if (!this.loginMostrando) {
      this.loginMostrando = true;
    }
    this.carrinhoMostrando = !this.carrinhoMostrando;
  }

  dropdrawUser() {
    if (!this.carrinhoMostrando) {
      this.carrinhoMostrando = true;
    }
    this.loginMostrando = !this.loginMostrando;
  }

  direcionarCategoria(id: number) {
    this.router.navigate(['/categoria', id]);
  }

  direcionarPrincipal() {
    this.router.navigate(['']);
  }

  // Fim Rotas
}
