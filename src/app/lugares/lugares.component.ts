import { Component } from '@angular/core';
import {LugaresService} from "../services/lugares.service";
import {trigger, state, style, transition, animate} from "@angular/animations";

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
    animations: [
        trigger('contenedorAnimable', [
            state('inicial', style({
                opacity: 0
            })),
            state('final', style({
                opacity: 1
            })),
            transition('inicial => final', animate(3000)),
            transition('final => inicial', animate(1000))
        ])
    ]
})
export class LugaresComponent {
    title = 'PlatziSquare';
    state = 'inicial';
    
    animar(){ // Funcion para ejecutar la animación a través de un botón.
        this.state = (this.state === 'final') ? 'inicial' : 'final';
    }

    contenedorInicia(e){
        console.log("Iniciado!!");
        console.log(e);
    }

    contenedorTermina(e){
        console.log("Terminado!!");
        console.log(e);
    }

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
            this.lugares = lugares;
                let $this = this;
                this.lugares = Object.keys($this.lugares).map(function (key) { return $this.lugares[key]; });
                this.lat = this.lugares[1].lat;
                this.lng = this.lugares[1].lng;
                this.state = 'final';
        }, error => {
                this.error = 'En estos momentos hay un conflicto con la plataforma, en los proximos minutos será resuelto. Error: '+error.statusText;
            });
    }
}
