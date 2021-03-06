import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { motion } from 'framer-motion'

import { CarDetails, DealPerks, DealPickupReturn, DealPriceBreakdown } from '../../components';

import { ServiceContext } from '../../services/context/service-context'

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
    <motion.div
      className={classes['car-details-page']}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
    </motion.div>
  ));

}
