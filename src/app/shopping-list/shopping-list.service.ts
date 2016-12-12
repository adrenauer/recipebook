import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
  ];

  getIngredients() {
    return this.ingredients;
  }

  deleteIngredient(index) {
    this.ingredients.splice(index, 1);
  }

  deleteAllIngredients()
  {
    this.ingredients = [];
  }

  addIngredients(ingredients: Ingredient[]) {
    Array.prototype.push.apply(this.ingredients, ingredients);
  }
}
