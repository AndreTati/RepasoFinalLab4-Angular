import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-nuestros-autos',
  templateUrl: './nuestros-autos.component.html',
  styleUrls: ['./nuestros-autos.component.css']
})
export class NuestrosAutosComponent implements OnInit {

  autosJson:any[]=[]
  autosFiltrados:any[]=[]
  url:string;
  parametro:string;
  constructor(private autosService:AutoService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.url=window.location.href;
    this.autosJson=this.autosService.getAutos();
    if(this.url.includes('/busqueda')){
      this.activatedRoute.params.subscribe(params=>{
        this.parametro=params['parametro'];
      })
      this.autosFiltrados=this.autosJson.filter((auto)=>{
        if(auto.marca.toLowerCase().includes(this.parametro.toLowerCase())){
          return auto;
        }
        if(auto.modelo.toLowerCase().includes(this.parametro.toLowerCase())){
          return auto;
        }
        if(auto.anio.toLowerCase().includes(this.parametro.toLowerCase())){
          return auto;
        }
      })
      this.autosJson=this.autosFiltrados
    }
    
  }

}
