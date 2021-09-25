import React from 'react';
import { render, screen } from '@testing-library/react';

import MusicVideos from '../MusicVideos';

describe('MusicVideos', () => {
  it('Shoud have appbare,search icon and card content in document', async () => {
    render(<MusicVideos />);

    const appbarElement = await screen.findByTestId('app-bar');
    const searchElement = await screen.findByTestId('search-icon');
    const multiSelectElement = await screen.findByPlaceholderText('Title...');

    expect(multiSelectElement).toBeInTheDocument();
    expect(appbarElement).toBeInTheDocument();
    expect(searchElement).toBeInTheDocument();
  });
});
