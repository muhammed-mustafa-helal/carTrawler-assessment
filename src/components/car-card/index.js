import { BsPerson } from 'react-icons/bs'
import { GiCarDoor } from 'react-icons/gi'
import { TbLuggage, TbExchange } from 'react-icons/tb'
import { MdOutlineAir, MdLocalGasStation } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'

import { IconContext } from 'react-icons'
import './styles/car-card.scss';


export default function CarCard() {
    return (
        <div className="car-card">
            <div className="car-card__image">
                <img src="https://ctimg-fleet.cartrawler.com/toyota/rav4/primary.png?auto=format&w=600" alt="Toyota Rav4" />
            </div>


            <IconContext.Provider value={{ className: 'react-icons' }}>

                <div className="car-card__options">
                    <h3 className="car-card__options--name">Toyota Rav4 <span>or similar</span></h3>
                    <div className="car-card__options--menu">
                        <ul className="car-card__options--menu--catalog">
                            <li title='Number of seats'><span><BsPerson /></span>4 seats</li>
                            <li title='Luggage capacity'><span><TbLuggage /></span>2 bags</li>
                            <li title='Transmission type'><span><TbExchange /></span>Manual</li>
                        </ul>
                        <ul className="car-card__options--menu--catalog">
                            <li title='Fuel type'><span><MdLocalGasStation /></span>Petrol</li>
                            <li title='Number of doors'><span><GiCarDoor /></span>4 doors</li>
                            <li title='Air conditioning'><span><MdOutlineAir /></span>Yes</li>
                        </ul>
                    </div>

                </div>
                <div className="car-card__price">
                    <img src='https://cdn2.rcstatic.com/sp/images/suppliers/202_logo_200.png' alt='vendor' />
                    <div className='car-card__price--price'>
                        <p>Price for 14 days</p>
                        <h3>&#36;200 CAD</h3>
                    </div>
                    <p className='car-card__price--free-cancellation'><span><BsCheck /></span>Free cancellation</p>
                    <button>View Deal</button>
                </div>

            </IconContext.Provider >

        </div>
    )
}