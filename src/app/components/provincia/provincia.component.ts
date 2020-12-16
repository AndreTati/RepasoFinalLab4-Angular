import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {

  @Input() provincia:any;
  constructor() { }

  ngOnInit(): void {
  }

}
