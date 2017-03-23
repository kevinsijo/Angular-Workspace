import { Component, OnInit } from '@angular/core';
import { Temp1Component} from '../Shared/temp1.component';

@Component({
  selector: 'aicte-abaicte',
  templateUrl: './abaicte.component.html',
  styleUrls: ['./abaicte.component.css'],
  providers: [Temp1Component]
})
export class AbaicteComponent implements OnInit {
  data:string='Changed!';
  link1:string='https://www.youtube.com';
  val:string='return false';
  constructor() {}
  ngOnInit() {

  }

}
