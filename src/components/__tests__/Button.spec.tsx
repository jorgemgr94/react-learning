import { render } from '@testing-library/react';
import Button from '../Button';

test('should use counter', async () => {
	const { getByText } = render(<Button text="Hello Jest!" />);
  expect(getByText("Hello Jest!")).toBeTruthy();
});
