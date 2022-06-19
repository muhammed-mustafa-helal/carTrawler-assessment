import classes from './styles/deal-price-breakdown.module.scss';

export default function DealPriceBreakdown({ rateTotalAmount, estimatedTotalAmount, currencyCode }) {
    return (
        <div className={classes['deal-price-breakdown']}>
            <h1>Car price breakdown</h1>
            <div className={classes['deal-price-breakdown__rental-price']}>
                <p>Car rental price</p>
                <p>&#36;{rateTotalAmount} {currencyCode}</p>
            </div>
            <hr />
            <div className={classes['deal-price-breakdown__rental-price']}>
                <p>Price for 15 days: </p>
                <p>&#36;{estimatedTotalAmount} {currencyCode}</p>
            </div>
        </div>
    )
}
