import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedForm } from './comum/shared-form';
import { EnderecoService } from '../../../comum/servicos/endereco.service';
import { Endereco } from '../../../comum/class/endereco';
import { UsuarioService } from '../../../comum/servicos/usuario.service';
import { Usuario } from '../../../comum/class/usuario';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  // Variaveis
  formulario: FormGroup;
  sharedForm: SharedForm;

  constructor(private formBuilder: FormBuilder, private enderecoService: EnderecoService,
    private usuarioService: UsuarioService) { }

  // Ciclos
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      email: [null, [Validators.email, Validators.required]],
      conemail: [null, [Validators.email, Validators.required]],
      telefone: [null, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
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
      const usuario: Usuario = new Usuario(
        null, valor.nome, valor.email, valor.senha, valor.CPF, valor.telefone
      );
      const endereco: Endereco = valor.endereco;
      console.log(usuario, endereco);
    }
  }
}
