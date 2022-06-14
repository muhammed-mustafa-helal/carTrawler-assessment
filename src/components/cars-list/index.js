import './styles/car-list.scss'
import { CarCard } from '../'

const carCards = new Array(10).fill(0);
export default function CarsList() {
    return (
        <div className='car-list'>
            {carCards.map((card) => (<CarCard />))}
        </div>
    )
}
