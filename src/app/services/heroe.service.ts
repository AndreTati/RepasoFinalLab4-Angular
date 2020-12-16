import { Injectable } from '@angular/core';
import * as data from 'src/assets/data/heroes.json';
@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  heroes:any=(data as any).default
  constructor() { }

  getHeroes():any[]{
    return this.heroes;
  }

  getHeroeXID(id:string):any{
    for(let heroe of this.heroes){
      if(heroe.id===id){
        return heroe;
      }
    }
  }
}
