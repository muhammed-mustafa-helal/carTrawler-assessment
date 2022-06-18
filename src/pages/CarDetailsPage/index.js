import { CarDetails, DealPerks, DealPickupReturn, DealPriceBreakdown } from '../../components';

import classes from './styles/car-details-page.module.scss';

export default function CarDetailsPage() {
  return (

    <div className={classes['car-details-page']}>
      <div className={classes['car-details-page__container']}>
        <div className={classes['car-details-page__details']}>
          <h1>Your deal</h1>
          <p>Next...Checkout</p>
          <CarDetails />
          <DealPerks />
        </div>
        <div className={classes['car-details-page__information']}>
          <DealPickupReturn />
          <DealPriceBreakdown />
          <button>Go to checkout</button>
        </div>
      </div>
    </div>
  )
}
