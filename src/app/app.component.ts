import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';

  personas:any = [
   {nombre: 'Kendry Ortiz', edad: 22},
   {nombre: 'Victor Fernandez', edad: 24},
   {nombre: 'Carmen E. Fernandez', edad: 17},
   {nombre: 'Kimberly Ortiz', edad: 10},
   {nombre: 'Zharick Vega Ortiz', edad: 4}
  ];

  lugares:any = [
    {active: true, nombre: 'Floristeria las rosas'},
    {active: true, nombre: 'Parque los niñitos'},
    {active: false, nombre: 'C.C el paseo'},
    {active: false, nombre: 'Puente el vistozo'},
    {active: true, nombre: 'Stadium el deporte'},
  ];

  lat:number = 10.6729857;
  lng:number = -71.6084183;
  
  constructor(){
  	
  }
}
