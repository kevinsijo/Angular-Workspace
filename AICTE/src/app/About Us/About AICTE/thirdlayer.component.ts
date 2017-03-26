import { Component, OnInit } from '@angular/core';

import { data } from '../Data/abaicte.data';
import { GenerateBoxService } from "../../Shared/generate-box.service";

@Component({
  selector: 'aicte-thirdlayer',
  templateUrl: './thirdlayer.component.html',
  styleUrls: ['./thirdlayer.component.css'],
  providers: [GenerateBoxService]
})
export class ThirdlayerComponent implements OnInit {
  data=data;
  constructor(private generate: GenerateBoxService) {}


  ngOnInit() {
    this.generate.load(this.data);
  }

}
