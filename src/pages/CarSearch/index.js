import { FilterPanel, CarsList } from "../../components"

import './styles/car-search.scss'

export default function CarSearchPage() {
    return (
        <div className="car-list-page">
            <div className="car-list-page__container">
                <FilterPanel />
                <CarsList />
            </div>
        </div>
    )
}
