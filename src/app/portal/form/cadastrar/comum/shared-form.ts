import { FormGroup } from "@angular/forms";

export class SharedForm {
  private formulario: FormGroup;

  constructor(form: FormGroup) {
    this.formulario = form;
  }
  aplicarCssErro(campo: string) {
    return { 'is-invalid': this.verificaValidToucched(campo) };
  }

  verificaValidToucched(campo: string) {
    const cm = this.formulario.get(campo);
    return !cm.valid && (cm.touched || cm.dirty);
  }

  verificarEmail() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  verificaValidacoesForm(form: FormGroup) {
    Object.keys(form.controls).forEach(x => {
      const controle = form.get(x);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  restar() {
    this.formulario.reset();
  }

  validadarCPF(cpf: string): boolean {
    if (cpf === null) {
      return false;
    }
    if (cpf.length !== 11) {
      return false;
    }
    if (
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return false;
    }
    let numero: number = 0;
    let caracter: string = '';
    let numeros: string = '0123456789';
    let j: number = 10;
    let somatorio: number = 0;
    let resto: number = 0;
    let digito1: number = 0;
    let digito2: number = 0;
    let cpfAux: string = '';
    cpfAux = cpf.substring(0, 9);
    for (let i = 0; i < 9; i++) {
      caracter = cpfAux.charAt(i);
      if (numeros.search(caracter) === -1) {
        return false;
      }
      numero = Number(caracter);
      somatorio = somatorio + numero * j;
      j--;
    }
    resto = somatorio % 11;
    digito1 = 11 - resto;
    if (digito1 > 9) {
      digito1 = 0;
    }
    j = 11;
    somatorio = 0;
    cpfAux = cpfAux + digito1;
    for (let i = 0; i < 10; i++) {
      caracter = cpfAux.charAt(i);
      numero = Number(caracter);
      somatorio = somatorio + numero * j;
      j--;
    }
    resto = somatorio % 11;
    digito2 = 11 - resto;
    if (digito2 > 9) {
      digito2 = 0;
    }
    cpfAux = cpfAux + digito2;
    if (cpf !== cpfAux) {
      return false;
    } else {
      return true;
    }
  }

  verificandoDuplicidade(sc1: string, sc2: string) {
    const c1 = this.formulario.get(sc1);
    const c2 =  this.formulario.get(sc2);

    if (c1.value === c2.value) {
      c1.clearValidators();
      c2.clearValidators();

    } else {
      c1.setErrors({erro: 'invalido'});
      c2.setErrors({erro: 'invalido'});
    }
  }
}
