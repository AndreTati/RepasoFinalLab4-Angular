import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  parametro:string;
  pais:any;
  constructor(private activatedRoute:ActivatedRoute, private regionService:RegionService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((param)=>{
      this.regionService.getPaisesXRegion(param['code']).subscribe((res)=>{
        this.pais=res;
        console.log(this.pais)
      })
    })
  }

}
