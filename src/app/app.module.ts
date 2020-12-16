import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuDeOpcionesComponent } from './components/menu-de-opciones/menu-de-opciones.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ListaHeroesComponent } from './components/lista-heroes/lista-heroes.component';
import { DetalleHeroeComponent } from './components/detalle-heroe/detalle-heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuDeOpcionesComponent,
    HeroeComponent,
    ListaHeroesComponent,
    DetalleHeroeComponent
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
