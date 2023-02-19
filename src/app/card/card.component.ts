import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public drink: any;

  drinkName;
  drinkDescription;
  imageSource = "";
  ingredientsArray = [];
  measureArray = [];

  constructor(private router: Router, public common: CommonService) {
  }


  ngOnInit(): void {
    this.drinkName = this.drink.strDrink;
    this.drinkDescription = this.drink.strCategory;
    this.common.imgsrc = this.drink.idDrink;
    this.imageSource = `../../assets/${this.common.imgsrc}.jpg`;

    if (this.drink !== null && this.drink !== undefined) {
      for (let i in this.drink) {
        if (i.includes("strIngredient")) {
          this.ingredientsArray.push(this.drink[i]);
        }
        if (i.includes("strMeasure")) {
          this.measureArray.push(this.drink[i]);
        }
      }
    }
  }

  cardClicked() {
    this.common.drinkName = this.drink.strDrink;
    this.common.category = this.drink.strCategory;
    this.common.type = this.drink.strAlcoholic;
    this.common.instructions = this.drink.strInstructions;
    this.common.imgsrc = this.drink.idDrink;

    let temp = "";
    for (let i = 0; i < 15; i++) {
      if (this.ingredientsArray[i] !== null && this.measureArray[i] !== null) {
        temp += this.ingredientsArray[i] + ":" + this.measureArray[i] + ", ";
      }
    }
    temp = temp.slice(0, temp.length - 2);
    this.common.ingredients = temp;

    this.common.isCardClicked = true;
    this.router.navigate(['detail']);
  }

}
