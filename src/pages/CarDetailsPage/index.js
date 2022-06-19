import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { CarDetails, DealPerks, DealPickupReturn, DealPriceBreakdown } from '../../components';

import { ServiceContext } from '../../context/service-context'

import classes from './styles/car-details-page.module.scss';


export default function CarDetailsPage() {
  const [carDeal, setCarDeal] = useState(null);
  const { pickupReturnInfo, getCarDealById } = useContext(ServiceContext);
  const params = useParams();


  useEffect(() => {
    const carDealById = getCarDealById(params.carId);
    setCarDeal(carDealById)
  }, [getCarDealById, params.carId])


  return (carDeal && (
    <div className={classes['car-details-page']}>
      <div className={classes['car-details-page__container']}>
        <div className={classes['car-details-page__details']}>
          <h1>Your deal</h1>
          <p>Next...Checkout</p>
          <CarDetails car={carDeal} />
          <DealPerks />
        </div>
        <div className={classes['car-details-page__information']}>
          <DealPickupReturn pickupReturnInfo={pickupReturnInfo} />
          <DealPriceBreakdown
            rateTotalAmount={carDeal.rateTotalAmount}
            estimatedTotalAmount={carDeal.estimatedTotalAmount}
            currencyCode={carDeal.currencyCode}
          />
          <button>Go to checkout</button>
        </div>
      </div>
    </div>
  ));

}
