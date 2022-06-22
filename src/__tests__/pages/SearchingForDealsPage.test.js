import React from 'react'

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

import { SearchingForDealsPage } from '../../pages';

describe('<SearchingForDealsPage />', () => {
    test('renders SearchingForDealsPage with <SearchDeals /> component correctly', () => {
        render(
            <MemoryRouter>
                <SearchingForDealsPage />
            </MemoryRouter>
        );
        expect(screen.getByText('Checking the top companies to find the best deals')).toBeInTheDocument();
        expect(screen.getAllByRole('img')).toHaveLength(8);
    });
});