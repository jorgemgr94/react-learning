export type Ingredient = 'bacon' | 'tomato' | 'mozzarella' | 'pineapples';

interface PizzaProps {
  ingredients: Ingredient[];
}

export default function Pizza ({ ingredients }: PizzaProps) {
  return (
    <>
      <h3>Pizza</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </>
  );
}
