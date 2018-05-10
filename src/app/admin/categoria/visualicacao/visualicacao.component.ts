import { Component, OnInit, OnDestroy } from '@angular/core';
import { Categorias } from '../../../comum/class/categoria';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-visualicacao',
  templateUrl: './visualicacao.component.html',
  styleUrls: ['./visualicacao.component.scss']
})
export class VisualicacaoComponent implements OnInit , OnDestroy {

  categoria : Categorias;
  subscription: Subscription

  constructor(private router: Router,
    private route: ActivatedRoute) { }

    // Hora de Inicializar
  ngOnInit() {
    this.subscription = this.route.data.subscribe(
      (info: { cadegoria: Categorias}) => {
        this.categoria = info.cadegoria;
      }
    );
  }

  // Hora de Destruir
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
