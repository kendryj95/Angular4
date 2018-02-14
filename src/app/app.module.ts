import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import {Routes, RouterModule} from "@angular/router";
import {DetalleComponent} from "./detalle/detalle.component";
import {LugaresComponent} from "./lugares/lugares.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {LugaresService} from "./services/lugares.service";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {CrearComponent} from "./crear/crear.component";
import {HttpModule} from "@angular/http";
import {LinkifystrPipe} from "./pipes/linkifystr.pipe";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AutorizacionService } from './services/autorizacion.service'
import {MyGuardService} from "./services/my-guard.service";
import {GuardLoginNotAccessService} from "./services/guard-login-not-access.service";

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear', component: CrearComponent, canActivate: [MyGuardService]},
  {path: 'crear/:id', component: CrearComponent, canActivate: [MyGuardService]},
  {path: 'login', component: LoginComponent, canActivate: [GuardLoginNotAccessService]},
  {path: 'registro', component: RegistroComponent, canActivate: [GuardLoginNotAccessService]}
];
export const firebaseConfig = {
  apiKey: "AIzaSyCczpvih1NZ1eIvOnO8PlcY5SFnbtc17us",
  authDomain: "kendrysquare1.firebaseapp.com",
  databaseURL: "https://kendrysquare.firebaseio.com",
  storageBucket: "kendrysquare.appspot.com",
  messagingSenderId: "780633036985"
};
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
      DetalleComponent,
      LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDrylV6wvpdPShiN8QQ2Mt_DCffujC5GrA'
    }),
      RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
      HttpModule,
    BrowserAnimationsModule
  ],
  providers: [LugaresService, AutorizacionService, MyGuardService, GuardLoginNotAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
