import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleProvinciaComponent } from './components/detalle-provincia/detalle-provincia.component';
import { HomeComponent } from './components/home/home.component';
import { MapaArgentinaComponent } from './components/mapa-argentina/mapa-argentina.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'home/busqueda/:parametro', component:HomeComponent
  },
  {
    path:'home/puerto', component:HomeComponent
  },
  {
    path:'mapa', component:MapaArgentinaComponent
  },
  {
    path:'detalle/:id', component:DetalleProvinciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
