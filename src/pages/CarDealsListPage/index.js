import { FilterPanel, CarsList, PickupReturnLegend } from "../../components"

import './styles/car-search.scss'

export default function CarDealsList() {
    return (
        <PickupReturnLegend>
            <div className="car-search-page">
                <div className="car-search-page__container">
                    <FilterPanel />
                    <CarsList />
                </div>
            </div >
        </PickupReturnLegend >

    )
}
