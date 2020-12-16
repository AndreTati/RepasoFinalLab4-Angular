import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  regiones:any[]
  paises:any[]
  constructor(private http:HttpClient) { }

  getRegiones(code:string):Observable<any[]>{
    return this.http.get<any[]>('https://restcountries.eu/rest/v2/regionalbloc/'+code);
  }

  getPaisesXRegion(code:string):Observable<any[]>{
    return this.http.get<any[]>('https://restcountries.eu/rest/v2/alpha/'+code);
  }

  /* async getRegiones(code:string){
    this.regiones=await (await fetch('https://restcountries.eu/rest/v2/regionalbloc/'+code)).json();
    return this.regiones;
  } */
  
  /* async getPaisesXRegion(code:string){
    this.paises=await (await fetch('https://restcountries.eu/rest/v2/alpha/'+code)).json();
    return this.paises;
  } */
}
