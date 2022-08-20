import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

test('renders input with text', () => {
  render(<Input value="Some text here" placeholder="" onChange={() => null} />);
  const linkElement = screen.getByDisplayValue('Some text here');
  expect(linkElement).toBeInTheDocument();
});
