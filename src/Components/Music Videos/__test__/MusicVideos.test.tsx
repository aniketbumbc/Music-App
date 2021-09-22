import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MusicVideos from '../MusicVideos';

describe('MusicVideos', () => {
  it('Shoud have appbare,search icon and card content in document', async () => {
    render(<MusicVideos />);

    const appbarElement = screen.getByTestId('app-bar');
    const searchElement = screen.getByTestId('search-icon');

    await waitFor(() => expect(appbarElement).toBeInTheDocument());
    await waitFor(() => expect(searchElement).toBeInTheDocument());
  });
});
