import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-detalle-provincia',
  templateUrl: './detalle-provincia.component.html',
  styleUrls: ['./detalle-provincia.component.css']
})
export class DetalleProvinciaComponent implements OnInit {

  provincia:any={};
  constructor(private activatedRoute:ActivatedRoute, private provinciaService:ProvinciaService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      this.provincia=this.provinciaService.getProvinciaXID(param['id']);
    })
  }

}
