import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedForm } from './comum/shared-form';
import { EnderecoService } from '../../../comum/servicos/endereco.service';
import { Endereco } from '../../../comum/class/endereco';
import { UsuarioService } from '../../../comum/servicos/usuario.service';
import { Usuario } from '../../../comum/class/usuario';
import { VALID } from '@angular/forms/src/model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  // Variaveis
  formulario: FormGroup;
  sharedForm: SharedForm;
  cpfErro = true;

  public cpf = [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-' , /[0-9]/, /[0-9]/];
  public telefone = ['(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];
  public cep = [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/];

  constructor(private formBuilder: FormBuilder, private enderecoService: EnderecoService,
    private usuarioService: UsuarioService) { }

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

    console.log(this.formulario.value);

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
        rua: dados.logradouro ,
        bairro: dados.bairro ,
        cidade: dados.localidade ,
        estado: dados.uf
      }
    }) ;
  }

  onSubmit() {
    if (this.formulario.valid) {
      const valor = this.formulario.value;
      this.usuarioService.insertUsuario(valor);
    }
  }

  validadorCPF() {
    const campoCPF = this.formulario.get('CPF');
    // console.log(cpfErro, campoCPF);

    if (campoCPF.touched) {
      let cpf = campoCPF.value;
      cpf = cpf.replace(/\D/g, '');

      if (this.sharedForm.validadarCPF(cpf)) {
        // Validos
        campoCPF.clearValidators();
        this.cpfErro = true;
      } else {
        // Invalidos
        campoCPF.setErrors({cpf: 'cpf invalido'});
        this.cpfErro = false;
        console.log(this.cpfErro);

      }
    }
    this.cpfErro = true;
  }

  onConfimeEmail() {
    this.sharedForm.verificandoDuplicidade('email', 'conemail');
  }

  onConfimeSenha() {
    this.sharedForm.verificandoDuplicidade('senha', 'consenha');
  }



}
