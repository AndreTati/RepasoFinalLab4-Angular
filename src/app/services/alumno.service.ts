import { Injectable } from '@angular/core';
import * as data from 'src/assets/data/alumnos.json';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  alumnos:any=(data as any).default;
  constructor() { }

  getAlumnos():any[]{
    return this.alumnos;
  }
  
  getAlumnoXID(id:string){
    for(let alumno of this.alumnos){
      if(alumno.foto.replace(".jpg", "")===id){
        return alumno;
      }
    }
  }
}
