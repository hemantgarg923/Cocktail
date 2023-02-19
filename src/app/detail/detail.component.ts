import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  name;
  category;
  type;
  instructions;
  ingredients;
  source;

  constructor(public common : CommonService) { }

  ngOnInit(): void {
    this.name = this.common.drinkName;
    this.category = this.common.category;
    this.type = this.common.type;
    this.instructions = this.common.instructions;
    this.ingredients = this.common.ingredients;
    this.source = `../../assets/${this.common.imgsrc}.jpg`;
  }

}
