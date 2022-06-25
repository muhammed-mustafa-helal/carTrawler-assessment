import React from 'react'

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

import { Brands } from '../../components';

describe('<CarBrands />', () => {
    it('should render <CarBrands /> with it\'s content correctly', () => {
        render(
            <MemoryRouter>
                <Brands />
            </MemoryRouter>
        );
        expect(screen.getByText('Connecting you to the biggest brands in car rental')).toBeInTheDocument();
        expect(screen.getAllByRole('img').length).toBe(11);
    });
});