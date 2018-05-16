import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TipoUser } from '../../shared/model/tipo-user';
import { Subscription } from 'rxjs';
import { PermissaoService } from '../../shared/servicos/permissao.service';
import { Permissao } from '../../shared/model/permissao';

@Component({
  selector: 'app-visualicacao',
  templateUrl: './visualicacao.component.html',
  styleUrls: ['./visualicacao.component.scss']
})
export class VisualicacaoComponent implements OnInit, OnDestroy {

  dados: TipoUser;
  permissoes: Permissao[] = [];
  subscription: Subscription;
  modalRef: BsModalRef;

  // Consturação
  modalTexto: string[] = [];
  // 0- Nada  1- editar , 2- Deletar
  tipo = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private permissaoService: PermissaoService
  ) {}

  // Hora de Inicializar - Resolver
  ngOnInit() {
    this.subscription = this.route.data.subscribe(
      (info: { dados: TipoUser }) => {
        this.dados = info.dados;
        this.permissaoService.getPermisao(info.dados.id).subscribe(
          (dados) => {
            console.log(dados);

            this.permissoes = dados;
          }
        );
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
    this.constucaoModal('Alerta', 'Realmente deseja Excluir ?', null);
    this.tipo = 2;
    this.openModal(modal);
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  constucaoModal(titulo: string, body: string, maisBody: string | null) {
    this.modalTexto[0] = titulo;
    this.modalTexto[1] = body;
    this.modalTexto[2] = maisBody;
  }

  deletar() {
    this.permissaoService.deleteTipoUser(this.dados.id).subscribe(
      dados => {
        this.tipo = 0;
        this.constucaoModal('Foi deletado sucesso', 'A permissão foi deletado com sucesso.', null);
        this.router.navigate(['/admin/permissoes']);
      },
      (error: any) => {
        this.constucaoModal('Ocorreu um Erro', 'Tente mais Tarde', error);
      }
    );
  }
}
