import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {

  alumno:any
  suma:number=0;
  promedio:number=0;
  constructor(private activatedRoute:ActivatedRoute, private alumnoService:AlumnoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      this.alumno=this.alumnoService.getAlumnoXID(param['id']);
    })
    for(let nota of this.alumno.notas){
      this.suma+=nota;
    }
    this.promedio=this.suma/this.alumno.notas.length
  }


}
