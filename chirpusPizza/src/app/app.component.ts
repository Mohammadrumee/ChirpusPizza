import { Component } from '@angular/core';
import { Category } from './enum/category';
import { MenuItems } from './interface/menu-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Chirpur Pizza';

  Category = Category;

  menuItems: MenuItems[] = [
    {
      name: 'Chicken Fingers',
      category: Category.Dinner,
      price: 4.5
    },
    {
      name: 'Pizza',
      category: Category.Dinner,
      price: 11.99
    },
    {
      name: 'Wings',
      category: Category.Sides,
      price: 8.99
    },
    {
      name: 'Breadsticks',
      category: Category.Sides,
      price: 4.99
    },
    {
      name: 'Ceasar Salad',
      category: Category.Salads,
      price: 5.99
    },
    {
      name: 'Cinnamon Roll',
      category: Category.Dessert,
      price: 8.99
    },
    {
      name: 'Fried Rice',
      category: Category.Dinner,
      price: 13.99
    }
  ]


}
