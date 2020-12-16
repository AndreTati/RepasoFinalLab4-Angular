import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-grilla-alumnos',
  templateUrl: './grilla-alumnos.component.html',
  styleUrls: ['./grilla-alumnos.component.css']
})
export class GrillaAlumnosComponent implements OnInit {

  alumnosJson:any[];
  alumnosFiltrados:any[]=[];
  parametro:string;
  url:string;
  constructor(private activatedRoute:ActivatedRoute, private alumnoService:AlumnoService) { }

  ngOnInit(): void {
    this.url=window.location.href;
    this.activatedRoute.params.subscribe(param=>{
      this.parametro=param['parametro'];
    })
    console.log(this.parametro)
    this.alumnosJson=this.alumnoService.getAlumnos();
    if(this.url.includes('legajo')){
      for(let alumno of this.alumnosJson){
        if(alumno.legajo===parseInt(this.parametro)){
          this.alumnosFiltrados.push(alumno);
        }
      }
      this.alumnosJson=this.alumnosFiltrados;
    }else if(this.url.includes('nombre')){
      for(let alumno of this.alumnosJson){
        if(alumno.alumno.toLowerCase().includes(this.parametro.toLowerCase())){
          this.alumnosFiltrados.push(alumno);
        }
      }
      this.alumnosJson=this.alumnosFiltrados;
    }
  }

  getPromedio(alumno):number{
    let suma=0;
    let promedio=0;
    for(let nota of alumno.notas){
      suma+=nota;
    }
    promedio=suma/alumno.notas.length;
    return promedio
  }

  getId(alumno):string{
    return alumno.foto.replace(".jpg", "");
  }
}
