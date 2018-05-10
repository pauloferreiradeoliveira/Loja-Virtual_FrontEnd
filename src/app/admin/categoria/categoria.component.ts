import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriasService } from '../../comum/servicos/categorias.service';
import { Categorias } from '../../comum/class/categoria';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit, OnDestroy {

  categorias: Categorias[] = [];
  categoriasSubcripiton: Subscription;

  filtro: string;

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit() {
    this.categoriasSubcripiton = this.categoriaService.getCadegorias().subscribe(
      (data)=> this.categorias = data
    );
  }

  ngOnDestroy(){
    this.categoriasSubcripiton.unsubscribe();
  }

  // Para poder aplicar filtro
  pegarCadegorias(){

    if(this.categorias.length === 0 || this.filtro === undefined){
      return this.categorias;
    }

    // aplicando filtro
    return this.categorias.filter(
      (v) =>{
       if( v.nome.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
         return true;
       }
       return false;
      }
    )
  }
}


