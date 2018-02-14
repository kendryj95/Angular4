import { Component, OnInit } from '@angular/core';
import {AutorizacionService} from '../services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loguear:any = {};
  constructor(private autorizacionService: AutorizacionService) {
  }

  login(){
    this.autorizacionService.login(this.loguear.email,this.loguear.password);
    //this.loguear = {};
  }

  ngOnInit() {
  }

}
