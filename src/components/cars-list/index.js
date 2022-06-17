import { useEffect, useState } from 'react';

import { CarCard } from '../';

import nextId from "react-id-generator";


import jsonData from '../../cars.json'
import classes from './styles/car-list.module.scss'


export default function CarsList() {
    const [cars, setCars] = useState([])
    useEffect(() => {
        function fetchData() {
            const carsArray = [];
            const carTrawlerData = JSON.parse(JSON.stringify(jsonData));
            const vendorsAndTheirAvailableCars = carTrawlerData[0].VehAvailRSCore.VehVendorAvails;
            vendorsAndTheirAvailableCars.forEach(({ Vendor, VehAvails }) =>
            (VehAvails.forEach(({ Vehicle, TotalCharge }) => {
                carsArray.push(
                    {
                        ...Vehicle,
                        vendorName: Vendor['@Name'],
                        estimatedTotalAmount: TotalCharge['@EstimatedTotalAmount'],
                        currencyCode: TotalCharge['@CurrencyCode'],
                        carId: nextId('c-')
                    })
            })))
            carsArray.sort((a, b) => a.estimatedTotalAmount - b.estimatedTotalAmount);
            setCars(carsArray)
        }
        fetchData();
    }, [])




    return (
        <div className={classes['car-list']}>
            {cars.length && cars.map((car) => (<CarCard key={car.carId} car={car} />))}
        </div>
    )
}
