import { Component, OnInit } from '@angular/core';
import {AutorizacionService} from "../services/autorizacion.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro:any = {};

  constructor(private autorizacionService: AutorizacionService) {

  }

  registrar(){
    this.autorizacionService.registro(this.registro.email, this.registro.password);
    this.registro = {};
  }

  ngOnInit() {
  }

}
