import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () => {
  render(<Button text="Some text here" />);
  const linkElement = screen.getByText('Some text here');
  expect(linkElement).toBeInTheDocument();
});
