import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  drinksObject;
  drinksArray;
  
  category;
  type;
  instructions;
  ingredients;
  drinkName;
  imgsrc;

  isCardClicked = false;

  constructor(private http: HttpClient) {
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=').subscribe((data) => {
      this.drinksObject = data;
      this.drinksArray = this.drinksObject.drinks;
    })
  }
}
