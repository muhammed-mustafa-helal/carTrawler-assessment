import React from 'react'

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

import { trimToLowerCase } from '../../helpers'
import { vendorPhotos } from '../../fixtures/vendorsPhotos'

import CarCard from '../../components/car-card';


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


describe('<CarCard />', () => {
    test('renders CarCard with populated Props correctly', () => {

        render(
            <MemoryRouter>
                <CarCard car={car} />
            </MemoryRouter>
        );
        expect(screen.getByTestId('car-name')).toContainHTML(car.name);
        expect(screen.getByTitle('Number of passengers')).toHaveTextContent(`${car.passengerQuantity} Passengers`);
        expect(screen.getByTitle('Luggage capacity')).toHaveTextContent(`${car.baggageQuantity} Bags`);
        expect(screen.getByTitle('Transmission type')).toHaveTextContent(`${car.transmissionType}`);
        expect(screen.getByTitle('Fuel type')).toHaveTextContent(`${car.fuelType}`);
        expect(screen.getByTitle('Number of doors')).toHaveTextContent(`${car.doorCount} Doors`);
        expect(screen.getByTitle('Air conditioning')).toHaveTextContent(`${car.airConditioning}`);
    });

    test('renders vendor logo with the correct image', () => {
        const vendorName = trimToLowerCase(car.vendorName);
        const vendorLogo = vendorPhotos[vendorName];
        render(
            <MemoryRouter>
                <CarCard car={car} />
            </MemoryRouter>
        );
        expect(screen.getByAltText(vendorName)).toHaveAttribute('src', vendorLogo);
    });

    test('navigates to the car details page with the correct carId', () => {
        render(
            <MemoryRouter>
                <CarCard car={car} />
            </MemoryRouter>
        );
        const viewDealButton = screen.getByText('View Deal');
        expect(viewDealButton).toHaveAttribute('href', `/car-details/${car.carId}`);
    });
});