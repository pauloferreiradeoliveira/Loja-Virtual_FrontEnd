import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // HIDEN - Para poder esconder os painel
  login = true;
  painel = false;
  final = false;

  constructor() { }

  ngOnInit() {
  }

  mostarLogin(){
    this.final = !this.final;
    this.login = !this.login;
  }

  fecharLoginPainel(){
    this.login = true;
    this.painel = false;
    this.final = false;
  }

}
