import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aicte-temp2',
  templateUrl: './temp2.component.html',
  styleUrls: ['./temp2.component.css']
})
export class Temp2Component implements OnInit {
  @Input() x:string;
  constructor() { }

  ngOnInit() {
  }

}
