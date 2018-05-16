import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

import { Categorias } from '../../../comum/class/categoria';
import { CategoriasService } from '../../../comum/servicos/categorias.service';
import { SharedForm } from '../../../comum/formularios/shared-form';




@Component({
  selector: 'app-formulariocategoria',
  templateUrl: './formularioCategoria.component.html',
  styleUrls: ['./formularioCategoria.component.scss']
})

export class FormularioCategoriaComponent implements OnInit {

  categoria: Categorias;
  inscricao: Subscription;
  formulario: FormGroup;

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
    private categoriaService: CategoriasService,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
  ) {}

  ngOnInit() {
    // Criando o formulario
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required]
    });

    // Para poder auxliar o formulario
    this.sharedForm = new SharedForm(this.formulario);

    // Inscricão (verificar de e EDITAR ou NOVO)
    this.inscricao = this.activeRoute.params.subscribe(parma => {
      const id = parma['id'];

      if (id === undefined) {
        this.addConstrucao('Adicionar', 'fas fa-plus', 1);
      } else {
        this.addConstrucao('Editar', 'fas fa-edit', 2);

        this.categoriaService.getCadegoria(id).subscribe(data => {
          this.formulario.patchValue({
            id: data.id,
            nome: data.nome
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
          this.categoriaService.addCadegoria(valor).subscribe(
            dados => {
              this.criarModal('Cadastrado com Sucesso', 'A categoria foi cadastrado com sucesso.', null);
              this.route.navigate(['/admin/categorias']);
            },
            (error: any) => {
              this.criarModal('Ocorreu um Erro', 'Tente mais Tarde', error);
            }
          );
          break;
        case 2:
          this.categoriaService.editCadegoria(valor, valor.id).subscribe(
            dados => {
              this.criarModal('Editado com Sucesso', 'A editado foi cadastrado com sucesso.', null);
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


  // Modal
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
}
