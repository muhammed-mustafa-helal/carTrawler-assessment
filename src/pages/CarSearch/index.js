import { FilterPanel, CarsList, PickupReturnLegend } from "../../components"

import './styles/car-search.scss'

export default function CarSearchPage() {
    return (
        <div className="car-list-page">
            {/* <PickupReturnLegend> */}
                <div className="car-list-page__container">
                    <FilterPanel />
                    <CarsList />
                </div>
            {/* </PickupReturnLegend > */}
        </div >
    )
}
