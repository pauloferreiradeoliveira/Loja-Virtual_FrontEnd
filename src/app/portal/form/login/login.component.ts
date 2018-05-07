import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedForm } from '../comum/shared-form';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../comum/estilosForm.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  sharedForm: SharedForm;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      email : [null,[Validators.email, Validators.required]],
      senha : [null,[Validators.required, Validators.min(8)]]
    });

    this.sharedForm = new SharedForm(this.formulario);
  }

  onSubmit() {}
}
