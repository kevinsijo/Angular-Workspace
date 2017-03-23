import { Component,Input, OnInit } from '@angular/core';


@Component({
  selector: 'aicte-temp1',
  templateUrl: './temp1.component.html',
  styleUrls: ['./temp1.component.css'],

})
export class Temp1Component implements OnInit {
  @Input() x: string;
  ngOnInit() {
  }

}
