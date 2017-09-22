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
    {plan: 'pagado', cercania: 1, distancia: 10,active: true, nombre: 'Floristeria las rosas'},
    {plan: 'pagado', cercania: 1, distancia: 15,active: true, nombre: 'Parque los niñitos'},
    {plan: 'gratis', cercania: 2, distancia: 17,active: false, nombre: 'C.C el paseo'},
    {plan: 'gratis', cercania: 3, distancia: 120,active: false, nombre: 'Puente el vistozo'},
    {plan: 'pagado', cercania: 3, distancia: 6,active: true, nombre: 'Stadium el deporte'},
  ];

  lat:number = 10.6729857;
  lng:number = -71.6084183;
  
  constructor(){
  	
  }
}
