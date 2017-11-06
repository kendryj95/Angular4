import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Http} from "@angular/http";
@Injectable()
export class LugaresService{
    lugares:any = [
        {id: 1,plan: 'pagado', cercania: 1, distancia: 10,active: true, nombre: 'Floristeria las rosas'},
        {id: 2,plan: 'pagado', cercania: 1, distancia: 15,active: true, nombre: 'Parque los niñitos'},
        {id: 3,plan: 'gratis', cercania: 2, distancia: 17,active: false, nombre: 'C.C el paseo'},
        {id: 4,plan: 'gratis', cercania: 3, distancia: 120,active: false, nombre: 'Puente el vistozo'},
        {id: 5,plan: 'pagado', cercania: 3, distancia: 6,active: true, nombre: 'Stadium el deporte'},
    ];

    constructor(private afDB: AngularFireDatabase, private http: Http){}

    public getLugares(){
        return this.afDB.list("lugares/");
    }

    public buscarLugar(id){
        return this.lugares.filter((lugar) => {
                return lugar.id == id})[0] || null;
    }
    
    public guardarLugar(lugar){
        console.log(lugar);
        this.afDB.database.ref("lugares/"+lugar.id).set(lugar);
    }

    public getGeoData(direccion){
        //http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
    }
}