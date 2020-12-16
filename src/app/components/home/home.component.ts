import { Component, OnInit } from '@angular/core';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  autosJson:any[]=[]
  autosData:any[]=[];
  constructor(private autoService:AutoService) { }

  ngOnInit(): void {
    this.autosJson=this.autoService.getAutos();
    for(let auto of this.autosJson){
      if(auto.destacado==='Y'){
        this.autosData.push(auto)
      }
    }
  }

}
