import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import RemotePizza from '../RemotePizza';

const ingredients = ['bacon', 'tomato', 'mozzarella', 'pineapples'];
let mock = new MockAdapter(axios);

beforeAll(() => {
  mock = new MockAdapter(axios);
});

afterEach(() => {
  mock.reset();
});

test('download ingredients from internets', async () => {
  expect.assertions(4);

  mock
    .onGet(
      'https://httpbin.org/anything?ingredients=bacon&ingredients=mozzarella&ingredients=pineapples'
    )
    .reply(200, { args: { ingredients } });

  const { getByText } = render(<RemotePizza />);

  fireEvent.click(getByText(/cook/i));

  // const history = mock.history.get;
  // console.log(history);

  await waitFor(() => {
    ingredients.forEach((ingredient) => {
      expect(getByText(ingredient)).toBeTruthy();
    });
  });
});
