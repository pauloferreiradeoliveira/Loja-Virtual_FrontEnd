import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Categorias } from '../../comum/class/categoria';
import { Produto } from '../../comum/class/produto';
import { ProdutosService } from '../../comum/servicos/produtos.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit, OnDestroy {

  inscricoes: Subscription[] = [] ;

  categoria: Categorias;
  produtos: Produto[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceProduto: ProdutosService
  ) {}

  ngOnInit() {
    this.inscricoes.push(this.route.data.subscribe(
      (info: { cadegoria: Categorias}) => {
        this.categoria = info.cadegoria;
      }
    ));

    this.inscricoes.push(this.serviceProduto.getProdutoCategoria(this.categoria.id).subscribe(
      dados => this.produtos = dados
    ));
  }

  ngOnDestroy() {
    for (const inscricao of this.inscricoes) {
      inscricao.unsubscribe();
    }
  }

}
