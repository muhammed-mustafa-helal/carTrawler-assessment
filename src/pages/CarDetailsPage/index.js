import { CarDetails, DealPerks, DealPickupReturn, DealPriceBreakdown } from '../../components';

import classes from './styles/car-details-page.module.scss';

export default function CarDetailsPage() {
  return (
    <div className={classes['car-details-page']}>
      <div className={classes['car-details-page__container']}>
        <div className={classes['car-details-page__details']}>
          <CarDetails />
          <DealPerks />
        </div>
        <div className={classes['car-details-page__information']}>
          <DealPickupReturn />
          <DealPriceBreakdown />
        </div>
      </div>
    </div>
  )
}
