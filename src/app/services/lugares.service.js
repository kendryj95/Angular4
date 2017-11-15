"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var LugaresService = (function () {
    function LugaresService(afDB, http) {
        this.afDB = afDB;
        this.http = http;
        this.API_ENDPOINT = 'https://kendrysquare.firebaseio.com';
        this.lugares = [
            { id: 1, plan: 'pagado', cercania: 1, distancia: 10, active: true, nombre: 'Floristeria las rosas' },
            { id: 2, plan: 'pagado', cercania: 1, distancia: 15, active: true, nombre: 'Parque los niñitos' },
            { id: 3, plan: 'gratis', cercania: 2, distancia: 17, active: false, nombre: 'C.C el paseo' },
            { id: 4, plan: 'gratis', cercania: 3, distancia: 120, active: false, nombre: 'Puente el vistozo' },
            { id: 5, plan: 'pagado', cercania: 3, distancia: 6, active: true, nombre: 'Stadium el deporte' },
        ];
    }
    LugaresService.prototype.getLugares = function () {
        //return this.afDB.list("lugares/");
        //noinspection TypeScriptValidateTypes
        return this.http.get(this.API_ENDPOINT + '/.json')
            .map(function (resultado) {
            var data = resultado.json().lugares;
            return data;
        });
    };
    LugaresService.prototype.buscarLugar = function (id) {
        /*return this.lugares.filter((lugar) => {
         return lugar.id == id})[0] || null;*/
        return this.afDB.object("lugares/" + id);
    };
    LugaresService.prototype.guardarLugar = function (lugar) {
        //this.afDB.database.ref("lugares/"+lugar.id).set(lugar);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, { headers: headers });
    };
    LugaresService.prototype.getGeoData = function (direccion) {
        //http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
    };
    LugaresService = __decorate([
        core_1.Injectable()
    ], LugaresService);
    return LugaresService;
}());
exports.LugaresService = LugaresService;
//# sourceMappingURL=lugares.service.js.map