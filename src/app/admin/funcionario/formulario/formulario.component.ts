import { Component, OnInit, TemplateRef } from '@angular/core';
import { SharedForm } from '../../../comum/formularios/shared-form';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FuncionarioService } from '../../shared/servicos/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Funcionario } from '../../shared/model/funcionario';
import { TipoUser } from '../../shared/model/tipo-user';
import { PermissaoService } from '../../shared/servicos/permissao.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  Funcionario: Funcionario;
  inscricao: Subscription;
  formulario: FormGroup;
  permisao: TipoUser[] = [];

  modalRef: BsModalRef;

  sharedForm: SharedForm;

  // Consturação
  constucao: string[] = [];
  modalTexto: string[] = ['', '', ''];
  // 1- editar , 2- novo
  tipo: number;

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private service: FuncionarioService,
    private permissaoService: PermissaoService,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
  ) {}

  ngOnInit() {

    // Criando o formulario
    this.formulario = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      senha: [null, Validators.required],
      id_tipo_users: [null, Validators.required]
    });

    // Para poder auxliar o formulario
    this.sharedForm = new SharedForm(this.formulario);

    this.permissaoService.getTipoUsers().subscribe(
      (data) => {
        console.log(data);
        this.permisao = data;
      }
    );

    // Inscricão (verificar de e EDITAR ou NOVO)
    this.inscricao = this.activeRoute.params.subscribe(parma => {
      const id = parma['id'];

      if (id === undefined) {
        this.addConstrucao('Adicionar', 'fas fa-plus', 1);
      } else {
        this.addConstrucao('Editar', 'fas fa-edit', 2);

        this.service.getFuncionario(id).subscribe(data => {
          this.formulario.patchValue({
            id: data.id,
            nome: data.name
          });
        });
      }
    });
  }

  // Costrução NOVO e EDITAR
  addConstrucao(titulo: string, estilo: string, tipo: number): void {
    this.constucao[0] = titulo;
    this.constucao[1] = estilo;
    this.tipo = tipo;
  }

  criarModal(titulo: string, body: string, erros: string | null) {
    this.modalTexto[0] = titulo;
    this.modalTexto[1] = body;
    this.modalTexto[2] = erros;
  }

  // Salvar Dados
  onSubmit(modal) {
    // Reseta o Modal
    this.modalTexto = [];
    // Verificar o formulario
    if (this.formulario.valid) {
      const valor = this.formulario.value;
      switch (this.tipo) {
        case 1:
          this.service.insertFuncionario(valor).subscribe(
            dados => {
              this.criarModal('Cadastrado com Sucesso', 'A Funcionaeio foi cadastrado com sucesso.', null);
              this.route.navigate(['/admin/funcionario']);
            },
            (error: any) => {
              this.criarModal('Ocorreu um Erro', 'Tente mais Tarde', error);
            }
          );
          break;
        case 2:
          this.service.uploadFuncionario(valor, valor.id).subscribe(
            dados => {
              this.criarModal('Editado com Sucesso', 'A Funcionario foi editado com sucesso.', null);
              this.route.navigate(['/admin/categorias']);
            },
            (error: any) => {
              this.criarModal('Ocorreu um Erro', 'Tente mais Tarde', error);
            }
          );
          break;
      }
    } else {
      this.modalTexto[0] = 'Campos em Branco';
      this.modalTexto[1] = 'Por Favor, Preenchar os Campos';
    }
    this.openModal(modal);
  }

  /*construirFuncionario() {
    let valor = this.formulario.value;
    console.log(valor);
    let id_tipo_users = valor.permissao;
    this.permisao.forEach(element => {
      if (id_tipo_users === element.nome) {
        id_tipo_users = element.id;
      }
    });

    return valor;
  }
*/
  // Modal
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

}
