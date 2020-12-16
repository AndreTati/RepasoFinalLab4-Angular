import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-detalle-auto',
  templateUrl: './detalle-auto.component.html',
  styleUrls: ['./detalle-auto.component.css']
})
export class DetalleAutoComponent implements OnInit {

  auto:any;
  constructor(private activatedRoute:ActivatedRoute, private autoService:AutoService) { 
    this.activatedRoute.params.subscribe(params=>{
      this.auto=this.autoService.getAutosXID(params['id']);
    })
  }

  ngOnInit(): void {
    
  }

}
