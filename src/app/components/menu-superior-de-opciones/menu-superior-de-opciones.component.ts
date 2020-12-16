import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-menu-superior-de-opciones',
  templateUrl: './menu-superior-de-opciones.component.html',
  styleUrls: ['./menu-superior-de-opciones.component.css']
})
export class MenuSuperiorDeOpcionesComponent implements OnInit {

  legajo:string='';
  nombre:string='';
  idMejor:string='';
  alumnosJson:any[]
  suma:number=0;
  promedio:number=0;
  promedioMayor=0;
  constructor(private router:Router, private alumnoService:AlumnoService) { }

  ngOnInit(): void {
    this.alumnosJson=this.alumnoService.getAlumnos();
    for(let alumno of this.alumnosJson){
      for(let nota of alumno.notas){
        this.suma+=nota;
      }
      this.promedio=this.suma/alumno.notas.length
      this.suma=0;
      if(this.promedio>this.promedioMayor){
        this.promedioMayor=this.promedio;
        this.idMejor=alumno.foto.replace(".jpg", "");
      }
    }
  }

  buscar(tipo:string){
    if(tipo==='legajo'){
      if(this.legajo!=''){
        window.location.href='/legajo/'+this.legajo;
      }else{
        window.location.href='';
      }
    }else if(tipo==='nombre'){
      if(this.nombre!=''){
        window.location.href='/nombre/'+this.nombre;
      }else{
        window.location.href='';
      }
    }
  }

}
