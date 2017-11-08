import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LugaresService} from "../services/lugares.service";

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html',
})
export class CrearComponent {
    lugar:any = {};
    id:number = null;
    constructor(private route: ActivatedRoute,private lugaresService: LugaresService){
        this.id = this.route.snapshot.params['id'];
        this.lugaresService.buscarLugar(this.id)
            .valueChanges().subscribe(lugar => {
                console.log(lugar);
                this.lugar = lugar
            });
    }
    guardarLugar(){
        var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
        this.lugaresService.getGeoData(direccion)
            .subscribe(result =>{
               this.lugar.lat = result.json().results[0].geometry.location.lat;
               this.lugar.lng = result.json().results[0].geometry.location.lng;
                this.lugar.id = Date.now();
                this.lugaresService.guardarLugar(this.lugar);
                alert("Lugar guardado exitosamente!");
                this.lugar = {};
            });

    }

    editarLugar(){
        var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
        this.lugaresService.getGeoData(direccion)
            .subscribe(result =>{
               this.lugar.lat = result.json().results[0].geometry.location.lat;
               this.lugar.lng = result.json().results[0].geometry.location.lng;
                this.lugar.id = this.id = this.route.snapshot.params['id'];
                this.lugaresService.guardarLugar(this.lugar);
                alert("Lugar actualizado exitosamente!");
                this.lugar = {};
            });
    }
}
