import { Component, Input, OnInit } from '@angular/core';

import { Box } from "./box";
import { GenerateBoxService } from "./Services/generate-box.service";

@Component({
  selector: 'aicte-temp2',
  templateUrl: './temp2.component.html',
  styleUrls: ['./temp2.component.css']
})
export class Temp2Component implements OnInit {
  data : Box[];

  constructor(private generate: GenerateBoxService) {}

  ngOnInit() {
    this.data = this.generate.get();
  }

}
