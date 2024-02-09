import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simple a test recipe',
      'https://sugarspunrun.com/wp-content/uploads/2022/06/KETTLE-CHIPS-RECIPE-1-of-1-3.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simple a test recipe',
      'https://sugarspunrun.com/wp-content/uploads/2022/06/KETTLE-CHIPS-RECIPE-1-of-1-3.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
