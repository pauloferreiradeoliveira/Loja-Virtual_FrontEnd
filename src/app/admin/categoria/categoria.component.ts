import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../comum/servicos/categorias.service';
import { Categorias } from '../../comum/class/categoria';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: Categorias[];
  categoriasSubcripiton: Subscription;

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit() {
    this.categoriasSubcripiton = this.categoriaService.getCadegorias().subscribe(
      (data)=> this.categorias = data
    );
  }

}
