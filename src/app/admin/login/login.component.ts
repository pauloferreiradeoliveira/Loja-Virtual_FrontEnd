import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedForm } from '../../comum/formularios/shared-form';
import { AuthService } from '../shared/servicos/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  sharedForm: SharedForm;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      name: [null, [ Validators.required]],
      password: [null, [ Validators.required]]
    });

    this.sharedForm = new SharedForm(this.formulario);
  }

  onSubmit() {
    this.authService.login(this.formulario.value);
  }
}
