import { LoadingSpinner } from '../'
import { rentalBrands } from '../../fixtures/rentalBrands';

import classes from './styles/search-deals.module.scss';

export default function SearchDeals() {
    return (
        <div className={classes['search-deals']}>
            <h1>Checking the top companies to find the best deals</h1>
            <div className={classes['search-deals__brand-names']}>
                {rentalBrands.map((brand) => (<img key={brand.id} src={brand.imageUrl} alt={brand.name} />))}
            </div>
            <LoadingSpinner />
        </div>
    )
}
