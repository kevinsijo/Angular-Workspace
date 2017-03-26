import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aicte-fac',
  templateUrl: './fac.component.html',
  styleUrls: ['./fac.component.css']
})
export class FacComponent implements OnInit {
  data:string='Different every time!';
  constructor() { }

  ngOnInit() {
  }

}
