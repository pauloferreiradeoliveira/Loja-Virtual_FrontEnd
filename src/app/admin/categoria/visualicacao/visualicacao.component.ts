import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Categorias } from '../../../comum/class/categoria';

@Component({
  selector: 'app-visualicacao',
  templateUrl: './visualicacao.component.html',
  styleUrls: ['./visualicacao.component.scss']
})
export class VisualicacaoComponent implements OnInit, OnDestroy {
  categoria: Categorias;
  subscription: Subscription;
  modalRef: BsModalRef;

  // Consturação
  modalTexto: string[] = [];
  // 0- Nada  1- editar , 2- Deletar
  tipo = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {}

  // Hora de Inicializar
  ngOnInit() {
    this.subscription = this.route.data.subscribe(
      (info: { cadegoria: Categorias }) => {
        this.categoria = info.cadegoria;
      }
    );
  }

  // Hora de Destruir
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClickEditar(modal) {
    this.constucaoModal('Alerta', 'Realmente deseja Editar ?', null);
    this.tipo = 1;
    this.openModal(modal);
  }

  onClickDeletar(modal) {
    this.constucaoModal('Alerta', 'Realmente deseja Excluir ?', 'Ira deletar todos os produtos desta categoria');
    this.tipo = 2;
    this.openModal(modal);
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  constucaoModal(titulo: string, body: string, maisBody: string) {
    this.modalTexto[0] = titulo;
    this.modalTexto[1] = body;
    this.modalTexto[2] = maisBody;
  }
}
