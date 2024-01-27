import axios from 'axios';

import { Ingredient } from '../Pizza';

export type fetchIngredientsResponse = {
  args: {
    ingredients: Ingredient[];
  };
};

export async function fetchIngredients(): Promise<fetchIngredientsResponse> {
  const response = await axios.get<fetchIngredientsResponse>(
    'https://httpbin.org/anything?ingredients=bacon&ingredients=mozzarella&ingredients=pineapples'
  );
  return response.data;
}
