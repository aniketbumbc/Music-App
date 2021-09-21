import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render music video components correctly', () => {
    render(<App />);
    const parentElement = screen.getByTestId('music-video');
    expect(parentElement).toBeInTheDocument();
  });
});
