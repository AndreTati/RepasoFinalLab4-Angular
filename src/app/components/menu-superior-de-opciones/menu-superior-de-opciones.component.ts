import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-superior-de-opciones',
  templateUrl: './menu-superior-de-opciones.component.html',
  styleUrls: ['./menu-superior-de-opciones.component.css']
})
export class MenuSuperiorDeOpcionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buscar(evento){
    window.location.href='home/'+evento.target.value
  }

}
