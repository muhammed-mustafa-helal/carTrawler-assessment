import { useState, useContext, useEffect } from "react";

import { FilterPanel, CarsList, PickupReturnLegend } from "../../components"

import classes from './styles/car-search.module.scss'

import { ServiceContext } from "../../context/service-context";


export default function CarDealsList() {
    const { cars, pickupReturnInfo } = useContext(ServiceContext);
    const [sortedAndFilteredCars, setFilteredCars] = useState([]);

    useEffect(() => {
        cars?.length && setFilteredCars([...cars]);
    }, [cars]);

    const sortingTechnique = (filter) => {
        setFilteredCars(filter === 'ascending' ? [...cars] : [...cars].reverse());
    };

    return (
        (sortedAndFilteredCars.length && <PickupReturnLegend pickupReturnInfo={pickupReturnInfo}>
            <div className={classes['car-search-page']}>
                <div className={classes['car-search-page__container']}>
                    <FilterPanel sortingTechnique={sortingTechnique} />
                    <CarsList cars={sortedAndFilteredCars} />
                </div>
            </div>
        </PickupReturnLegend >)
    )
}
