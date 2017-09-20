import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
    {active: true, nombre:"Floreria la gardenia"},
    {active: true, nombre:"Donas la pasadita"},
    {active: true, nombre:"Veterinaria huellitas felices"},
    {active: false, nombre:"Desarrolladores systems"},
    {active: true, nombre:"C.C el paseito"},
    {active: false, nombre:"Castillo la princesa"},
  ]

  constructor(){
  	
  }
}
