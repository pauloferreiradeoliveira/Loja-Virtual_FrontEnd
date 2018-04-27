import { FormGroup } from '@angular/forms';

export class SharedForm {

  private formulario: FormGroup;

  constructor(form: FormGroup) {
    this.formulario = form;
  }
   aplicarCssErro(campo: string) {
    return {'is-invalid': this.verificaValidToucched(campo) };
  }

   verificaValidToucched(campo: string) {
    const cm = this.formulario.get(campo);
    return !cm.valid  && (cm.touched || cm.dirty);
  }

  verificarEmail() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  verificaValidacoesForm(form: FormGroup) {
    Object.keys(form.controls).forEach(
      x => {
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
}
