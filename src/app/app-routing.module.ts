import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleHeroeComponent } from './components/detalle-heroe/detalle-heroe.component';
import { ListaHeroesComponent } from './components/lista-heroes/lista-heroes.component';

const routes: Routes = [
  {
    path:'home', component:ListaHeroesComponent
  },
  {
    path:'home/busqueda/:parametro', component:ListaHeroesComponent
  },
  {
    path:'home/dc', component:ListaHeroesComponent
  },
  {
    path:'home/marvel', component:ListaHeroesComponent
  },
  {
    path:'detalle/:id', component:DetalleHeroeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
