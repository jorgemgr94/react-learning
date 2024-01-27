import { render, fireEvent, waitFor } from '@testing-library/react';

import RemotePizza from '../RemotePizza';
import { fetchIngredients } from '../RemotePizza/service';

jest.mock('../RemotePizza/service');

afterEach(() => {
  (fetchIngredients as jest.Mock).mockReset();
});

const ingredients = ['bacon', 'tomato', 'mozzarella', 'pineapples'];

test('download ingredients from internets', async () => {
  expect.assertions(4);

  (fetchIngredients as jest.Mock).mockResolvedValue({ args: { ingredients } });

  const { getByText } = render(<RemotePizza />);

  fireEvent.click(getByText(/cook/i));

  await waitFor(() => {
    ingredients.forEach((ingredient) => {
      expect(getByText(ingredient)).toBeTruthy();
    });
  });
});
