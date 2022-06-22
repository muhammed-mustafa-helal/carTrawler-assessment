import React from "react";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom'

import { CarsList } from '../../components';

describe("CarsList", () => {
    it("should render a list of cars", () => {
        const cars = [
            {
                carId: "c-1",
                name: "Kia Sorento",
                airConditioning: "Yes",
                transmissionType: "Automatic",
                fuelType: "Petrol",
                doorCount: "5",
                passengerQuantity: "5",
                baggageQuantity: "5",
                pictureUrl: "https://www.ford.com/assets/ford/content/dam/ford/ford_us/promos/2019/2019-ford-focus-1-1/2019-ford-focus-1-1-hero.jpg",
                vendorName: "Ford",
                rateTotalAmount: "100",
                estimatedTotalAmount: "100",
                currencyCode: "USD",
            },
            {
                carId: "c-2",
                name: "Ford Focus",
                airConditioning: "Yes",
                transmissionType: "Automatic",
                fuelType: "Petrol",
                doorCount: "5",
                passengerQuantity: "5",
                baggageQuantity: "5",
                pictureUrl: "https://www.ford.com/assets/ford/content/dam/ford/ford_us/promos/2019/2019-ford-focus-1-1/2019-ford-focus-1-1-hero.jpg",
                vendorName: "Ford",
                rateTotalAmount: "100",
                estimatedTotalAmount: "100",
                currencyCode: "USD",
            }
        ];
        render(
            <MemoryRouter>
                <CarsList cars={cars} />
            </MemoryRouter>
        );
        expect(screen.getByText("Kia Sorento")).toBeInTheDocument();
        expect(screen.getByText("Ford Focus")).toBeInTheDocument();
    });
});