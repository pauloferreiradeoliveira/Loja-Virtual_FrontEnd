import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Categorias } from '../../comum/class/categoria.class';
import { CategoriasService } from '../../comum/servicos/categorias.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  categorias: Categorias[] = null;
  obCatergorias: Subscription;
  isCollapsed = false;

  constructor(private cat: CategoriasService) { }

  ngOnInit() {
   this.pegandoCategorias();
   this.mostarOuNao();

  }

  mostarOuNao() {
    if (window.matchMedia('only screen and (max-width: 760px)').matches) {
       this.isCollapsed = !this.isCollapsed;
    } else {
      this.isCollapsed = false;
    }
  }
  ngOnDestroy() {
    this.obCatergorias.unsubscribe();
  }

  pegandoCategorias() {
    this.obCatergorias = this.cat.getCadegorias().subscribe(
      dados => this.categorias = dados
    );
  }



}
