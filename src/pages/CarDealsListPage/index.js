import { useContext } from "react";

import { FilterPanel, CarsList, PickupReturnLegend } from "../../components"

import classes from './styles/car-search.module.scss'

import { ServiceContext } from "../../context/service-context";


export default function CarDealsList() {
    const { cars, pickupReturnInfo } = useContext(ServiceContext);
    return (
        <PickupReturnLegend pickupReturnInfo={pickupReturnInfo}>
            <div className={classes['car-search-page']}>
                <div className={classes['car-search-page__container']}>
                    <FilterPanel />
                    <CarsList cars={cars} />
                </div>
            </div>
        </PickupReturnLegend >
    )
}
