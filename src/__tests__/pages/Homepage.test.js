import React from 'react'

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

import { Homepage } from '../../pages';


describe('<Homepage />', () => {
    test('renders Homepage with <SearchForm /> and <Brands /> components correctly', () => {
        render(
            <MemoryRouter>
                <Homepage />
            </MemoryRouter>
        );
        expect(screen.getByText('Car Trawler - Search, Compare & Save')).toBeInTheDocument();
        expect(screen.getByText('Connecting you to the biggest brands in car rental')).toBeInTheDocument();
    });
});