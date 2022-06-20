import { BsPerson } from 'react-icons/bs';
import { GiCarDoor } from 'react-icons/gi';
import { TbLuggage, TbExchange } from 'react-icons/tb';
import { MdOutlineAir, MdLocalGasStation } from 'react-icons/md';
import { IconContext } from 'react-icons';

import { trimToLowerCase } from '../../helpers'
import { vendorPhotos } from '../../fixtures/vendorsPhotos'

import classes from './styles/car-details.module.scss';


export default function CarDetails({ car }) {

    const vendorName = trimToLowerCase(car.vendorName);
    const vendorLogo = vendorPhotos[vendorName];

    return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <div className={classes['car-details']}>
                <div className={classes['car-details__car-image']}>
                    <img src={car.pictureUrl} alt={car.name} />
                </div>
                <div className={classes['car-details__options']}>
                    <h1>{car.name}</h1>
                    <ul>
                        <li title='Number of passengers'>
                            <span>
                                <BsPerson />
                            </span>
                            {car.passengerQuantity} Passengers
                        </li>
                        <li title='Luggage capacity'>
                            <span>
                                <TbLuggage />
                            </span>
                            {car.baggageQuantity} Bags
                        </li>
                        <li title='Transmission type'>
                            <span>
                                <TbExchange />
                            </span>
                            {car.transmissionType}
                        </li>
                        <li title='Fuel type'>
                            <span>
                                <MdLocalGasStation />
                            </span>
                            {car.fuelType}
                        </li>
                        <li title='Number of doors'>
                            <span>
                                <GiCarDoor />
                            </span>
                            {car.doorCount} Doors
                        </li>
                        <li title='Air conditioning'>
                            <span>
                                <MdOutlineAir />
                            </span>
                            {car.airConditioning}
                        </li>
                    </ul>
                </div>
                <div className={classes['car-details__vendor-logo']}>
                    <img src={vendorLogo} alt={vendorName} />
                </div>
            </div>

        </IconContext.Provider>
    )
}
