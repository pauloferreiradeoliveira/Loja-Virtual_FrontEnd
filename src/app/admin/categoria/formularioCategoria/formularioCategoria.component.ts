import { Component, OnInit } from '@angular/core';
import { Categorias } from '../../../comum/class/categoria';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriasService } from '../../../comum/servicos/categorias.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formularioCategoria',
  templateUrl: './formularioCategoria.component.html',
  styleUrls: ['./formularioCategoria.component.scss']
})
export class FormularioCategoriaComponent implements OnInit {

  categoria: Categorias;
  inscricao: Subscription;

  // Consturação
  titulo: string;

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private categoriaService: CategoriasService
  ) { }

  ngOnInit() {

    this.inscricao = this.activeRoute.params.subscribe(
			(parma) => {
        let id = parma['id'];

        if(id == undefined){
          this.titulo = "Adicionar"
        }else {
          this.titulo = "Editar"
        }
        console.log(parma);
			}
		)
  }

}
