import { Injectable } from '@angular/core';
import * as data from 'src/assets/data/lista_provincias.json';
@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  provincias:any=(data as any).default

  constructor() { }

  getProvincias():any[]{
    return this.provincias;
  }

  getProvinciaXID(id:string):any{
    for(let provincia of this.provincias){
      if(provincia.abreviatura===id){
        return provincia;
      }
    }
  }
}
