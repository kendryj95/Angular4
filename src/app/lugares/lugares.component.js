"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var LugaresComponent = (function () {
    function LugaresComponent(lugaresService) {
        var _this = this;
        this.lugaresService = lugaresService;
        this.title = 'PlatziSquare';
        this.personas = [
            { nombre: 'Kendry Ortiz', edad: 22 },
            { nombre: 'Victor Fernandez', edad: 24 },
            { nombre: 'Carmen E. Fernandez', edad: 17 },
            { nombre: 'Kimberly Ortiz', edad: 10 },
            { nombre: 'Zharick Vega Ortiz', edad: 4 }
        ];
        this.lat = 0;
        this.lng = 0;
        this.lugares = null;
        this.error = null;
        lugaresService.getLugares()
            .subscribe(function (lugares) {
            console.log('Lugares: ', lugares);
            _this.lugares = lugares;
            var $this = _this;
            _this.lugares = Object.keys($this.lugares).map(function (key) { return $this.lugares[key]; });
            _this.lat = _this.lugares[1].lat;
            _this.lng = _this.lugares[1].lng;
            console.log(typeof _this.lugares, ': ', _this.lugares);
        }, function (error) {
            console.log(error);
            _this.error = 'En estos momentos hay un conflicto con la plataforma, en los proximos minutos será resuelto. Error: ' + error.statusText;
        });
    }
    LugaresComponent = __decorate([
        core_1.Component({
            selector: 'app-lugares',
            templateUrl: './lugares.component.html'
        })
    ], LugaresComponent);
    return LugaresComponent;
}());
exports.LugaresComponent = LugaresComponent;
//# sourceMappingURL=lugares.component.js.map