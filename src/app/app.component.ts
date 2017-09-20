import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';

  lugares:any = [
  {ver:true, nombre: 'Prueba 1'},
  {ver:true, nombre: 'Prueba 2'},
  {ver:false, nombre: 'Prueba 3'},
  {ver:true, nombre: 'Prueba 4'},
  {ver:true, nombre: 'Prueba 5'}
  ];

  lat:number = 10.6729857;
  lng:number = -71.6084183;
  
  constructor(){
  	
  }
}
