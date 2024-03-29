import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Ingredient } from '../Pizza';
import RemotePizza from '../RemotePizza';

const ingredients: Ingredient[] = [
  'bacon',
  'tomato',
  'mozzarella',
  'pineapples',
];

test('download ingredients from internets', async () => {
  const user = userEvent.setup();

  const fetchIngredients = () =>
    Promise.resolve({
      args: { ingredients },
    });
  render(<RemotePizza fetchIngredients={fetchIngredients} />);

  await user.click(screen.getByRole('button', { name: /cook/i }));

  for (const ingredient of ingredients) {
    expect(await screen.findByText(ingredient)).toBeInTheDocument();
  }
});
