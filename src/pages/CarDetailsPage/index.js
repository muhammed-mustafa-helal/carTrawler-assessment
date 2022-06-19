import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { CarDetails, DealPerks, DealPickupReturn, DealPriceBreakdown } from '../../components';

import { ServiceContext } from '../../context/service-context'

import classes from './styles/car-details-page.module.scss';


export default function CarDetailsPage() {
  const [car, setCar] = useState(null);
  const { cars, pickupReturnInfo } = useContext(ServiceContext);
  const params = useParams();
  const carId = params.carId;


  useEffect(() => {
    const individualCar = cars.find(car => car.carId === carId);
    setCar(individualCar)
  }, [carId, cars])


  return (car && (
    <div className={classes['car-details-page']}>
      <div className={classes['car-details-page__container']}>
        <div className={classes['car-details-page__details']}>
          <h1>Your deal</h1>
          <p>Next...Checkout</p>
          <CarDetails car={car} />
          <DealPerks />
        </div>
        <div className={classes['car-details-page__information']}>
          <DealPickupReturn pickupReturnInfo={pickupReturnInfo}/>
          <DealPriceBreakdown
            rateTotalAmount={car.rateTotalAmount}
            estimatedTotalAmount={car.estimatedTotalAmount}
            currencyCode={car.currencyCode}
          />
          <button>Go to checkout</button>
        </div>
      </div>
    </div>
  ));

}
