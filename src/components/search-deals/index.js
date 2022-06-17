import { LoadingSpinner } from '../'
import { rentalBrands } from '../../fixtures/rentalBrands';

import './styles/search-deals.scss';

export default function SearchDeals() {
    return (
        <div className='search-deals'>
            <h1>Checking the top companies to find the best deals</h1>
            <div className='search-deals__brand-names'>
                {rentalBrands.map((brand) => (<img key={brand.id} src={brand.imageUrl} alt={brand.name} />))}
            </div>
            <LoadingSpinner />
        </div>
    )
}
