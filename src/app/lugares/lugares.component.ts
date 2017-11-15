import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
})
export class LugaresComponent {
    title = 'PlatziSquare';

    personas:any = [
        {nombre: 'Kendry Ortiz', edad: 22},
        {nombre: 'Victor Fernandez', edad: 24},
        {nombre: 'Carmen E. Fernandez', edad: 17},
        {nombre: 'Kimberly Ortiz', edad: 10},
        {nombre: 'Zharick Vega Ortiz', edad: 4}
    ];

    lat:number = 0;
    lng:number = 0;

    lugares = null;
    error = null;
    constructor(private lugaresService:LugaresService){
        lugaresService.getLugares()
            .subscribe(lugares =>{
                console.log('Lugares: ',lugares);
            this.lugares = lugares;
                let $this = this;
                this.lugares = Object.keys($this.lugares).map(function (key) { return $this.lugares[key]; });
                this.lat = this.lugares[1].lat;
                this.lng = this.lugares[1].lng;
                console.log(typeof this.lugares,': ', this.lugares);
        }, error => {
                console.log(error);
                this.error = 'En estos momentos hay un conflicto con la plataforma, en los proximos minutos será resuelto. Error: '+error.statusText;
            });
    }
}
