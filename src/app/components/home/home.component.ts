import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  provinciasJson:any[];
  provinciasFiltradas:any[]=[];
  parametro:string;
  url:string;
  constructor(private provinciaService:ProvinciaService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.url=window.location.href;
    this.activatedRoute.params.subscribe(param=>{
      this.parametro=param['parametro'];
    })
    this.provinciasJson=this.provinciaService.getProvincias();
    if(this.url.includes('puerto')){
      for(let provincia of this.provinciasJson){
        if(provincia.tienePuerto==='Y'){
          this.provinciasFiltradas.push(provincia)
        }
      }
      this.provinciasJson=this.provinciasFiltradas;
    }else if(this.url.includes('busqueda')){
      for(let provincia of this.provinciasJson){
        if(provincia.superficie>=parseInt(this.parametro)){
          this.provinciasFiltradas.push(provincia)
        }
      }
      this.provinciasJson=this.provinciasFiltradas
    }
  }

}
