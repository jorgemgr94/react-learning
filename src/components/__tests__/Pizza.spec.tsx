import { render } from '@testing-library/react';
import Pizza from '../Pizza';
import type { Ingredient } from '../Pizza';

test('contains all ingredients', () => {
  const ingredients: Ingredient[] = [
    'bacon',
    'tomato',
    'mozzarella',
    'pineapples'
  ];
  const { getByText } = render(<Pizza ingredients={ingredients} />);

  ingredients.forEach((ingredient) => {
    expect(getByText(ingredient)).toBeTruthy();
  });
});
