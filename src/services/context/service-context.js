/* eslint-disable react-hooks/exhaustive-deps */

import { createContext, useState, useEffect, useCallback } from "react";

import nextId from "react-id-generator";
import { format } from 'date-fns'

import jsonData from '../../cars.json'

const ServiceContext = createContext();

const ServiceContextProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [vendorNames, setVendorNames] = useState([]);
    const [pickupReturnInfo, setPickupReturnInfo] = useState([]);

    useEffect(() => {
        getCars();
        getVendorNames();
        getPickupReturnInfo();
    }, []);


    const carTrawlerDataResponse = JSON.parse(JSON.stringify(jsonData));
    const vendorsAndAvailableCars = carTrawlerDataResponse[0].VehAvailRSCore.VehVendorAvails;

    const getCars = useCallback(() => {
        const carsArray = [];

        vendorsAndAvailableCars.forEach(({ Vendor, VehAvails }) =>
        (VehAvails.forEach(({ Vehicle, TotalCharge }) => {
            carsArray.push(
                {
                    carId: nextId('c-'),
                    name: Vehicle.VehMakeModel['@Name'],
                    airConditioning: Vehicle['@AirConditionInd'] === 'true' ? 'Yes' : 'No',
                    transmissionType: Vehicle['@TransmissionType'],
                    fuelType: Vehicle['@FuelType'],
                    doorCount: Vehicle['@DoorCount'],
                    passengerQuantity: Vehicle['@PassengerQuantity'],
                    baggageQuantity: Vehicle['@BaggageQuantity'],
                    pictureUrl: Vehicle.PictureURL,
                    vendorName: Vendor['@Name'],
                    rateTotalAmount: TotalCharge['@RateTotalAmount'],
                    estimatedTotalAmount: TotalCharge['@EstimatedTotalAmount'],
                    currencyCode: TotalCharge['@CurrencyCode'],
                })
        })));

        carsArray.sort((a, b) => a.estimatedTotalAmount - b.estimatedTotalAmount);

        setCars(carsArray);

    }, [vendorsAndAvailableCars]);

    const getVendorNames = useCallback(() => {
        const vendorNames = vendorsAndAvailableCars.map(({ Vendor: vendorData }) => (vendorData['@Name']));
        setVendorNames(vendorNames);
    }, [vendorsAndAvailableCars]);

    const getPickupReturnInfo = useCallback(() => {
        const requestDetails = carTrawlerDataResponse[0].VehAvailRSCore.VehRentalCore;

        const pickupDateTime = new Date(requestDetails['@PickUpDateTime']);
        const returnDateTime = new Date(requestDetails['@ReturnDateTime']);

        const pickupDate = format(pickupDateTime, 'MMM do yyyy, p')
        const returnDate = format(returnDateTime, 'MMM do yyyy, p');

        const pickupLocation = requestDetails.PickUpLocation['@Name'];
        const returnLocation = requestDetails.ReturnLocation['@Name'];

        setPickupReturnInfo({ pickupDate, returnDate, pickupLocation, returnLocation });
    }, [carTrawlerDataResponse]);


    const getCarDealById = useCallback(carId => {
        return cars?.find(car => car.carId === carId);
    }, [cars]);


    return (
        <ServiceContext.Provider value={{ cars, vendorNames, pickupReturnInfo, getCarDealById }}>
            {children}
        </ServiceContext.Provider>
    );
};

export { ServiceContext, ServiceContextProvider };