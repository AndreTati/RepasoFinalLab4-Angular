import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  id:number=0;
  constructor() { }

  @Input() auto:any;
  ngOnInit(): void {
    this.id=this.auto.imagen.replace(".jpg", "");
  }


}
