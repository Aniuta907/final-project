import React from 'react';
import { render } from '@testing-library/react';
import PokPage from '../components/PokPage';

test('renders PokPage content', () => {
  const { getByText } = render(<PokPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
