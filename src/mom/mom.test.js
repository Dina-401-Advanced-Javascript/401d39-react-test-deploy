import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import Mom from './mom';

test('begins with 100 dollars', () => {
  render(<Mom/>);
  const money = screen.getByTestId('money'); //gets by data-testId = 'money'
  expect(money).toHaveTextContent(100);
});

test('Marsha begins with 20 dollars', () => {
  render(<Mom/>);
  const marshaMoney = screen.getByTestId('marsha-money');
  expect(marshaMoney).toHaveTextContent(20);
});
