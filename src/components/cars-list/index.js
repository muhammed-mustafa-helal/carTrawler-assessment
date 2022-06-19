import { CarCard } from '..';

import classes from './styles/car-list.module.scss'

export default function CarsList({ cars }) {
    return (
        <div className={classes['car-list']}>
            {cars.map((car) => (<CarCard key={car.carId} car={car} />))}
        </div>
    )
}
