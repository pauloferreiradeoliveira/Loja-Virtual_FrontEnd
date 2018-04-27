import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Categorias } from '../../comum/class/categoria.class';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  inscricao: Subscription;
  categoria: Categorias;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.inscricao = this.route.data.subscribe(
      (info: { cadegoria: Categorias}) => {
        this.categoria = info.cadegoria;
      }
    );
  }

}
