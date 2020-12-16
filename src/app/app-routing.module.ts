import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleAlumnoComponent } from './components/detalle-alumno/detalle-alumno.component';
import { GrillaAlumnosComponent } from './components/grilla-alumnos/grilla-alumnos.component';

const routes: Routes = [
  {
    path:'', component:GrillaAlumnosComponent
  },
  {
    path:'legajo/:parametro', component:GrillaAlumnosComponent
  },
  {
    path:'nombre/:parametro', component:GrillaAlumnosComponent
  },
  {
    path:'detalle/:id', component:DetalleAlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
