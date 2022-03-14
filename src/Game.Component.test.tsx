import React from 'react';

import { render, screen } from '@testing-library/react';
import GameComponent from './Game.Component';

test('renders Battleship title', () => {
  render(<GameComponent />);
  const linkElement = screen.getByText(/Battleship/i);
  expect(linkElement).toBeInTheDocument();
});

