import { Injectable } from '@angular/core';
import * as data from 'src/assets/data/autos.json';

@Injectable({
  providedIn: 'root'
})
export class AutoService {


  autos:any=(data as any).default;

  constructor() { }

  getAutos():any[]{
    return this.autos;
  }

  getAutosXID(id:string):any{
    for(let auto of this.autos){
      if(auto.imagen.replace(".jpg", "")===id){
        return auto;
      }
    }
  }
}
