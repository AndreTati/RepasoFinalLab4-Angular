import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuDeOpcionesComponent } from './components/menu-de-opciones/menu-de-opciones.component';
import { AutoComponent } from './components/auto/auto.component';
import { HomeComponent } from './components/home/home.component';
import { NuestrosAutosComponent } from './components/nuestros-autos/nuestros-autos.component';
import { DetalleAutoComponent } from './components/detalle-auto/detalle-auto.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuDeOpcionesComponent,
    AutoComponent,
    HomeComponent,
    NuestrosAutosComponent,
    DetalleAutoComponent,
    ContactoComponent
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
