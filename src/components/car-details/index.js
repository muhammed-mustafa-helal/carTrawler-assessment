import { BsPerson } from 'react-icons/bs';
import { GiCarDoor } from 'react-icons/gi';
import { TbLuggage, TbExchange } from 'react-icons/tb';
import { MdOutlineAir, MdLocalGasStation } from 'react-icons/md';
import { IconContext } from 'react-icons';

import classes from './styles/car-details.module.scss';


export default function CarDetails() {
    return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <div className={classes['car-details']}>
                <div className={classes['car-details__car-image']}>
                    <img src="https://ctimg-fleet.cartrawler.com/toyota/rav4/primary.png?auto=format&w=600" alt="car" />
                </div>
                <div className={classes['car-details__options']}>
                    <h1 >Fiat Panda or similar</h1>
                    <ul>
                        <li title='Number of passengers'>
                            <span>
                                <BsPerson />
                            </span>
                            5 Passengers
                        </li>
                        <li title='Luggage capacity'>
                            <span>
                                <TbLuggage />
                            </span>
                            5 Bags
                        </li>
                        <li title='Transmission type'>
                            <span>
                                <TbExchange />
                            </span>
                            Manual
                        </li>
                        <li title='Fuel type'>
                            <span>
                                <MdLocalGasStation />
                            </span>
                            Petrol
                        </li>
                        <li title='Number of doors'>
                            <span>
                                <GiCarDoor />
                            </span>
                            4 Doors
                        </li>
                        <li title='Air conditioning'>
                            <span>
                                <MdOutlineAir />
                            </span>
                            Yes
                        </li>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
    )
}
