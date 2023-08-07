import { render, fireEvent } from '@testing-library/react';
import LoginForm from '../LoginForm';

// NOTE: using jest.fn() to define a spy for onSubmit prop of our Login component, then we’re filling the form using a technique, described in the previous section, then we simulate a click on the submit button and check that the onSubmit function was called only once and it has received login and password.
test('submits username and password', () => {
  const username = 'me';
  const password = 'please';
  const onSubmit = jest.fn();

  const { getByLabelText, getByText } = render(
    <LoginForm onSubmit={onSubmit} />
  );

  fireEvent.change(getByLabelText(/username/i), {
    target: { value: username }
  });

  fireEvent.change(getByLabelText(/password/i), {
    target: { value: password }
  });

  fireEvent.click(getByText(/Submit/i));

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    username,
    password
  });
});
