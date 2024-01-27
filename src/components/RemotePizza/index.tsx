import { useState } from 'react';

import type { fetchIngredientsResponse } from './service';
import { fetchIngredients as defaultFetchIngredients } from './service';
import { Ingredient } from '../Pizza';

export default function RemotePizza({
  fetchIngredients = defaultFetchIngredients,
}: {
  fetchIngredients?: () => Promise<fetchIngredientsResponse>;
}) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const handleCook = () => {
    fetchIngredients().then((response) => {
      setIngredients(response.args.ingredients);
    });
  };

  return (
    <>
      <h3>Pizza</h3>
      <button onClick={handleCook}>Cook</button>
      {ingredients.length > 0 && (
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      )}
    </>
  );
}
