import React from 'react';
import { render, screen } from '@testing-library/react';
import { video } from '../../../TestData/TestData';
import VideoCard from '../VideoCard';

describe('VideoCard', () => {
  it('Shoud have grid,image and card content in document', () => {
    render(<VideoCard video={video} />);

    const gridElement = screen.getByTestId('grid');
    const imageElement = screen.getByTestId('image');
    const content = screen.getByTestId('card-content');

    expect(gridElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it('Shoud have heading element in document', () => {
    render(<VideoCard video={video} />);

    const h2Element = screen.getByRole('heading', { level: 2 });
    const h5Element = screen.getByRole('heading', { level: 5 });
    const h6Element = screen.getByRole('heading', { level: 6 });

    expect(h2Element).toBeInTheDocument();
    expect(h2Element).toHaveTextContent('Beautiful Trauma');
    expect(h5Element).toBeInTheDocument();
    expect(h6Element).toBeInTheDocument();
  });

  it('Shoud have correct object value element in document', () => {
    render(<VideoCard video={video} />);

    const h2Element = screen.getByRole('heading', { level: 2 });
    const h5Element = screen.getByRole('heading', { level: 5 });
    const h6Element = screen.getByRole('heading', { level: 6 });

    expect(h2Element).toHaveTextContent('Beautiful Trauma');
    expect(h5Element).toHaveTextContent('artitst: P!nk');
    expect(h6Element).toHaveTextContent('Year: 2017');
  });

  it('Shoud have incorrect object value element in document', () => {
    render(<VideoCard video={video} />);

    const h2Element = screen.getByRole('heading', { level: 2 });

    expect(h2Element).not.toHaveTextContent('artitst: P!nk');
  });

  it('Should render correct image', () => {
    render(<VideoCard video={video} />);

    const imageElement = screen.getByTestId('image');

    expect(imageElement).toHaveStyle({
      backgroundImage:
        'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/877825/images/app/w522_h292.jpg',
    });
  });

  it('Should take a snapshot of component', () => {
    const { asFragment } = render(<VideoCard video={video} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
