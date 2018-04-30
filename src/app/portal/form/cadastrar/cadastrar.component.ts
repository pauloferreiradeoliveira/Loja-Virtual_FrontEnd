import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
// Proprio
import { SharedForm } from '../comum/shared-form';
import { EnderecoService } from '../../../comum/servicos/endereco.service';
import { Endereco } from '../../../comum/class/endereco';
import { UsuarioService } from '../../../comum/servicos/usuario.service';
import { Usuario } from '../../../comum/class/usuario';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  //  Modal
  modalRef: BsModalRef;
  messagemModal: string;
  tituloModal: string;

  enviar: Subscription;

  // Variaveis
  formulario: FormGroup;
  sharedForm: SharedForm;
  // Mostar os Erros
  Erro: boolean[] = [true, true, true];

  // Mascara
  public cpf = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-' , /[0-9]/, /[0-9]/];
  public telefone = ['(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public cep = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(private formBuilder: FormBuilder,
    private enderecoService: EnderecoService,
    private usuarioService: UsuarioService,
    private modalService: BsModalService,
    private router: Router
    ) { }

  // Ciclos
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      email: [null, [Validators.email, Validators.required]],
      conemail: [null, [Validators.email, Validators.required]],
      telefone: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(15)]],
      senha: [null, [Validators.required]],
      confsenha: [null, [Validators.required]],
      CPF: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      endereco: this.formBuilder.group({
        CEP: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });

    // Validações
    this.sharedForm = new SharedForm(this.formulario);
  }

  consultarCEP() {
    const cep = this.formulario.value.endereco.CEP;
    if (cep != null) {
      this.enderecoService.consultaCEP(cep).subscribe(
        dados => this.popularEnderecoForm(dados)
      );
    }
  }

  popularEnderecoForm(dados: Endereco) {
    this.formulario.patchValue({
      endereco: {
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    }) ;
  }

  // Validações - Começo

  validadorCPF() {
    const campoCPF = this.formulario.get('CPF');
    // console.log(cpfErro, campoCPF);

    if (campoCPF.touched) {
      const cpf = campoCPF.value;
      if (this.sharedForm.validadarCPF(cpf)) {
        // Validos
        campoCPF.clearValidators();
        this.Erro[0] = true;
      } else {
        // Invalidos
        campoCPF.setErrors({cpf: 'cpf invalido'});
        this.Erro[0] = false;
      }
    }
  }

  onConfimeEmail() {
    this.Erro[2] = this.sharedForm.verificandoDuplicidade('email', 'conemail');
  }

  onConfimeSenha() {
    this.Erro[1] = this.sharedForm.verificandoDuplicidade('senha', 'confsenha');
  }

  // Validações - FIM

  onSubmit(modal) {
    if (this.formulario.valid) {
      this.enviar =
        this.usuarioService.insertUsuario(this.formulario.value)
          .subscribe(
            dados => {
              this.tituloModal = 'Cadastrado com Sucesso';
              this.messagemModal = 'Obrigado por se Cadastrar';
              this.router.navigate(['/formularios/login']);

            },
            (error: any) => {
              this.tituloModal = 'Ocorreu um Erro';
              this.messagemModal = `Tente mais Tarde + <p>${error}</p>`;
            }
          );
      this.openModal(modal);
    }
  }

  // Modal
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
