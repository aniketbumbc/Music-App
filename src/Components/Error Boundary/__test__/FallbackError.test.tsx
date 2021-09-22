import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import FallbackError from '../FallbackError';

describe('FallbackError', () => {
  afterEach(cleanup);

  it('should have h1 and h3 element', () => {
    render(<FallbackError />);

    const h1Element = screen.getByRole('heading', { level: 1 });
    const h3Element = screen.getByRole('heading', { level: 3 });

    expect(h1Element).toBeInTheDocument();
    expect(h3Element).toBeInTheDocument();
  });

  it('Should  have correct text for h1 and h3 element', () => {
    render(<FallbackError />);

    const h1Element = screen.getByText('Something went wrong');
    const h3Element = screen.getByText('Please try again');

    expect(h1Element).toBeInTheDocument();
    expect(h3Element).toBeInTheDocument();
  });

  it('Shoud not have element in the DOM', () => {
    render(<FallbackError />);

    const nullElement = screen.queryByText('Error');

    expect(nullElement).not.toBeInTheDocument();
  });

  it('should take a snapshot of component', () => {
    const { asFragment } = render(<FallbackError />);

    expect(asFragment()).toMatchSnapshot();
  });
});
