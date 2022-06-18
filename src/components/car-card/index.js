import { Link } from 'react-router-dom';

import { BsPerson } from 'react-icons/bs'
import { GiCarDoor } from 'react-icons/gi'
import { TbLuggage, TbExchange } from 'react-icons/tb'
import { MdOutlineAir, MdLocalGasStation } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { IconContext } from 'react-icons'

import classes from './styles/car-card.module.scss';

import { trimAndToLowerCase } from '../../helpers/helpers'

import { vendorPhotos } from '../../fixtures/vendorsPhotos'
import { CAR_DETAILS_DYNAMIC } from '../../constants/routes';


export default function CarCard({ car }) {

    const vendorName = trimAndToLowerCase(car.vendorName);
    const vendorLogo = vendorPhotos[vendorName];

    return (
        <div className={classes['car-card']}>
            <div className={classes['car-card__image']}>
                <img src={car.PictureURL} alt="Toyota Rav4" />
            </div>

            <IconContext.Provider value={{ className: 'react-icons' }}>
                <div className={classes['car-card__options']}>
                    <h3 className={classes['car-card__options--name']}>{car.VehMakeModel['@Name']}</h3>
                    <div className={classes['car-card__options--menu']}>
                        <ul className={classes['car-card__options--menu--catalog']}>
                            <li title='Number of passengers'>
                                <span>
                                    <BsPerson />
                                </span>
                                {car['@PassengerQuantity']} Passengers
                            </li>
                            <li title='Luggage capacity'>
                                <span>
                                    <TbLuggage />
                                </span>
                                {car['@BaggageQuantity']} Bags
                            </li>
                            <li title='Transmission type'>
                                <span>
                                    <TbExchange />
                                </span>

                                {car['@TransmissionType']}
                            </li>
                        </ul>
                        <ul className={classes['car-card__options--menu--catalog']}>
                            <li title='Fuel type'>
                                <span>
                                    <MdLocalGasStation />
                                </span>
                                {car['@FuelType']}
                            </li>
                            <li title='Number of doors'>
                                <span>
                                    <GiCarDoor />
                                </span>
                                {car['@DoorCount']} Doors
                            </li>
                            <li title='Air conditioning'>
                                <span>
                                    <MdOutlineAir />
                                </span>
                                {car['@AirConditionInd'] === 'true' ? 'Yes' : 'No'}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={classes['car-card__price']}>
                    <img src={vendorLogo} alt='car.vendorName' />
                    <div className={classes['car-card__price--price']}>
                        <p>Price for 14 days</p>
                        <h3>&#36;{car.estimatedTotalAmount} {car.currencyCode}</h3>
                    </div>
                    <p className={classes['car-card__price--free-cancellation']}>
                        <span>
                            <BsCheck />
                        </span>
                        Free cancellation
                    </p>
                    <Link to={CAR_DETAILS_DYNAMIC(car.carId)}>View Deal</Link>
                </div>
            </IconContext.Provider >
        </div >
    )
}