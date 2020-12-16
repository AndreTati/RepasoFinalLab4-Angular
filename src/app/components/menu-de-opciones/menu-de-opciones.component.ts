import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-de-opciones',
  templateUrl: './menu-de-opciones.component.html',
  styleUrls: ['./menu-de-opciones.component.css']
})
export class MenuDeOpcionesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buscar(parametro:string){
    if(parametro!=''){
      this.router.navigate(['/home/busqueda', parametro]);
    }else{
      this.router.navigate(['/home'])
    }
  }
}
