export interface Recipe {
  id: number;
  name: string;
  slug: string;
  url_file: string;
  url_video: string;
  author: Author;
  category: Category;
  thumbnali: string;
  tutorials: Tutorial[];
  recipe_ingredients: RecipeIngredient[];
  about: string;
}

interface Author {
  id: number;
  name: string;
  photo: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  recipes_count: number;
  recipes: Recipe[];
}

interface Tutorial {
  id: number;
  name: string;
}

interface RecipeIngredient {
  id: number;
  ingredient: Ingredient;
}

interface Ingredient {
  id: number;
  name: string;
  photo: string;
}
