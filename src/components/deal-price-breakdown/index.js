import classes from './styles/deal-price-breakdown.module.scss';

export default function DealPriceBreakdown() {
    return (
        <div className={classes['deal-price-breakdown']}>
            <h1>Car price breakdown</h1>
            <div className={classes['deal-price-breakdown__rental-price']}>
                <p>Car rental price</p>
                <p>{'$303.58'} CAD</p>
            </div>
            <hr />
            <div className={classes['deal-price-breakdown__rental-price']}>
                <p>Price for 14 days: </p>
                <p>{'$303.58'} CAD</p>
            </div>
        </div>
    )
}
