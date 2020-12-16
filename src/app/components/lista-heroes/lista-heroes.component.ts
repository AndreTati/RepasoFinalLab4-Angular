import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.css']
})
export class ListaHeroesComponent implements OnInit {

  heroesJson:any[]=[]
  heroesFiltrados:any[]=[]
  parametro:string;
  url:string;
  constructor(private heroeService:HeroeService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.url=window.location.href;
    this.activatedRoute.params.subscribe(params=>{
      this.parametro=params['parametro'];
    });
    console.log(this.url)
    this.heroesJson=this.heroeService.getHeroes();
    if(this.url.includes('/dc')){
      for(let heroe of this.heroesJson){
        if(heroe.casa.toLowerCase()==='dc'){
          this.heroesFiltrados.push(heroe);
        }
      }
      this.heroesJson=this.heroesFiltrados;
    }else if(this.url.includes('/marvel')){
      for(let heroe of this.heroesJson){
        if(heroe.casa.toLowerCase()==='marvel'){
          this.heroesFiltrados.push(heroe);
        }
      }
      this.heroesJson=this.heroesFiltrados;
    }else if(this.url.includes('/busqueda')){
      for(let heroe of this.heroesJson){
        if(heroe.nombre.toLowerCase().includes(this.parametro.toLowerCase())){
          this.heroesFiltrados.push(heroe);
        }else if(heroe.bio.toLowerCase().includes(this.parametro.toLowerCase())){
          this.heroesFiltrados.push(heroe);
        }
        for(let poder of heroe.poderes){
          if(poder.toLowerCase().includes(this.parametro.toLowerCase())){
            this.heroesFiltrados.push(heroe);
          }
        }
      }
      this.heroesJson=this.heroesFiltrados
      console.log(this.heroesJson)
    }
  }

}
