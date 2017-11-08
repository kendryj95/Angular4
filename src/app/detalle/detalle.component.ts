import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LugaresService} from "../services/lugares.service";

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
})
export class DetalleComponent {

    id = null;
    lugar:any = {};
    constructor(private route: ActivatedRoute, private lugaresService:LugaresService){
        console.log('ID:', this.route.snapshot.params['id']);
        console.log('Parametros:', this.route.snapshot.queryParams['action'],',',this.route.snapshot.queryParams['referer']);
        this.id = this.route.snapshot.params['id'];
        //this.lugar = lugaresService.buscarLugar(this.id);
        this.lugaresService.buscarLugar(this.id)
            .valueChanges().subscribe(lugar => {
                this.lugar = lugar 
            });
    }
    
}
