import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  parametro:string;
  paises:any[]
  titulo:boolean=true;
  grilla:boolean=false;
  constructor(private activatedRoute:ActivatedRoute, private regionService:RegionService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      this.parametro=param['code'];
      console.log(this.parametro)
      if(this.parametro==='null'){
        this.titulo=true;
        this.grilla=false;
      }else{
        this.titulo=false;
        this.grilla=true;
        this.regionService.getRegiones(this.parametro).subscribe((res)=>{
          this.paises=res;
        })
      }
    })
    
    
  }

}
