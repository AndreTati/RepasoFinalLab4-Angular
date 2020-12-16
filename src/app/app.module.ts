import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuDeOpcionesComponent } from './components/menu-de-opciones/menu-de-opciones.component';
import { ProvinciaComponent } from './components/provincia/provincia.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleProvinciaComponent } from './components/detalle-provincia/detalle-provincia.component';
import { MapaArgentinaComponent } from './components/mapa-argentina/mapa-argentina.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuDeOpcionesComponent,
    ProvinciaComponent,
    HomeComponent,
    DetalleProvinciaComponent,
    MapaArgentinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
