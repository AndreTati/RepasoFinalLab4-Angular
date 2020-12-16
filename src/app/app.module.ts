import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuSuperiorDeOpcionesComponent } from './components/menu-superior-de-opciones/menu-superior-de-opciones.component';
import { GrillaAlumnosComponent } from './components/grilla-alumnos/grilla-alumnos.component';
import { DetalleAlumnoComponent } from './components/detalle-alumno/detalle-alumno.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorDeOpcionesComponent,
    GrillaAlumnosComponent,
    DetalleAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
