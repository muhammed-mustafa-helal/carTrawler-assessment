import { BsPerson } from 'react-icons/bs'
import { GiCarDoor } from 'react-icons/gi'
import { TbLuggage, TbExchange } from 'react-icons/tb'
import { MdOutlineAir, MdLocalGasStation } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'

import './styles/car-card.scss';


export default function CarCard() {
    return (
        <div className="car-card">
            <div className="car-card__image">
                <img src="https://ctimg-fleet.cartrawler.com/toyota/rav4/primary.png?auto=format&w=600" alt="Toyota Rav4" />
            </div>


            <div className="car-card__options">
                <h3 className="car-card__options--name">Toyota Rav4 <span>or similar</span></h3>
                <div className="car-card__options--menu">
                    <ul className="car_card__options--menu--catalog">
                        <li><span><BsPerson /></span>4 seats</li>
                        <li><span><TbLuggage /></span>2 bags</li>
                        <li><span><TbExchange /></span>Manual</li>
                    </ul>
                    <ul className="car_card__options--menu--catalog">
                        <li><span><MdLocalGasStation /></span>Petrol</li>
                        <li><span><GiCarDoor /></span>4 doors</li>
                        <li><span><MdOutlineAir /></span>Yes</li>
                    </ul>
                </div>

            </div>
            <div className="car-card__price">
                <img src='https://cdn2.rcstatic.com/sp/images/suppliers/202_logo_200.png' alt='Hertz' />
                <p>Price for 14 days</p>
                <h3>&euro;200</h3>
                <p className='free-cancellation'><span><BsCheck /></span>Free cancellation</p>
                <button>View Deal</button>
            </div>
        </div>
    )
}