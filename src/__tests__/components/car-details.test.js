import React from 'react'

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

import { trimToLowerCase } from '../../helpers'
import { vendorPhotos } from '../../fixtures/vendorsPhotos';

import { CarDetails } from '../../components';


const car = {
    carId: 1,
    name: 'Kia Rio or similar',
    airConditioning: 'Yes',
    transmissionType: 'Automatic',
    fuelType: 'Petrol',
    doorCount: '5',
    passengerQuantity: '5',
    baggageQuantity: '2',
    pictureUrl: 'https://ctimg-fleet.cartrawler.com/kia/rio/primary.png?auto=format&w=600',
    vendorName: 'HERTZ',
    estimatedTotalAmount: '731.47',
    currencyCode: 'CAD',
};

describe('<CarDetails />', () => {
    test('should render <CarDetails /> correctly', () => {

        const vendorName = trimToLowerCase(car.vendorName);
        const vendorLogo = vendorPhotos[vendorName];


        render(
            <MemoryRouter>
                <CarDetails car={car} />
            </MemoryRouter>
        );
        expect(screen.getByText(car.name)).toBeInTheDocument();
        expect(screen.getByTitle('Number of passengers')).toHaveTextContent(`${car.passengerQuantity} Passengers`);
        expect(screen.getByTitle('Luggage capacity')).toHaveTextContent(`${car.baggageQuantity} Bags`);
        expect(screen.getByTitle('Transmission type')).toHaveTextContent(`${car.transmissionType}`);
        expect(screen.getByTitle('Fuel type')).toHaveTextContent(`${car.fuelType}`);
        expect(screen.getByTitle('Number of doors')).toHaveTextContent(`${car.doorCount} Doors`);
        expect(screen.getByTitle('Air conditioning')).toHaveTextContent(`${car.airConditioning}`);

    });

    test('should have the correct vendor image', () => {

        render(
            <MemoryRouter>
                <CarDetails car={car} />
            </MemoryRouter>
        );

        const vendorName = trimToLowerCase(car.vendorName);
        const vendorLogo = vendorPhotos[vendorName];
        const image = screen.getByAltText(vendorName);

        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', vendorLogo);
    });
});