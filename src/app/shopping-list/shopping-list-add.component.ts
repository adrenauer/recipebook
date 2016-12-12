import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from "./shopping-list.service";
import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnInit {
  public ingredientName: string;
  public ingredientAmount: number;

  constructor(public sls: ShoppingListService) { }

  public saveIngredient()
  {
    this.sls.addIngredients([new Ingredient(this.ingredientName, this.ingredientAmount)]);
    this.clearInputs();
  }

  private clearInputs()
  {
    this.ingredientName = null;
    this.ingredientAmount = null;
  }

  ngOnInit() {
  }

}
