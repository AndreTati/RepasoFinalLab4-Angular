import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetalleAutoComponent } from './components/detalle-auto/detalle-auto.component';
import { HomeComponent } from './components/home/home.component';
import { NuestrosAutosComponent } from './components/nuestros-autos/nuestros-autos.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'detalle/:id', component:DetalleAutoComponent
  },
  {
    path:'nuestros-autos', component:NuestrosAutosComponent
  },
  {
    path:'nuestros-autos/busqueda/:parametro', component:NuestrosAutosComponent
  },
  {
    path:'contacto', component:ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
