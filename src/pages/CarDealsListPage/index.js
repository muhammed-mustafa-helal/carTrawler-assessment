import { FilterPanel, CarsList, PickupReturnLegend } from "../../components"

import classes from './styles/car-search.module.scss'

export default function CarDealsList() {
    return (
        <PickupReturnLegend>
            <div className={classes['car-search-page']}>
                <div className={classes['car-search-page__container']}>
                    <FilterPanel />
                    <CarsList />
                </div>
            </div>
        </PickupReturnLegend >

    )
}
