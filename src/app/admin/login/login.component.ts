import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedForm } from '../../portal/form/comum/shared-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  sharedForm: SharedForm;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null,[Validators.required]],
      senha: [null,[Validators.required]]
    });

    this.sharedForm = new SharedForm(this.formulario);
  }

}
