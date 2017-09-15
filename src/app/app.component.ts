import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  a = 10;
  listo = false;
  nombre:string = '';
  apellido:string = '';

  constructor(){
  	setTimeout(() => {
  		this.listo = true;
  	},3000);
  }

  hacerAlgo(){
  	alert("Probando Event Binding");
  }
}
