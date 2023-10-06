import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredien.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  Ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Mangoes', 10),
  ];

  constructor() {

  }
}
