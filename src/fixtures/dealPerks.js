import { randomIntFromInterval } from '../helpers'
import nextId from "react-id-generator";

export const greatChoice = [
    { id: nextId(), text: `Customer rating: ${randomIntFromInterval(7.5, 9)} / 10` },
    { id: nextId(), text: 'Most Popular fuel policy' },
    { id: nextId(), text: 'Easy to find counter' },
    { id: nextId(), text: 'Rental counter in terminal' },
    { id: nextId(), text: 'Short lines' },
    { id: nextId(), text: 'Free Cancellation' }
];

export const greatPrice = [
    { id: nextId(), text: 'Free cancellation up to 48 hours before pick-up' },
    { id: nextId(), text: 'Theft Protection with €2,000 excess' },
    { id: nextId(), text: 'Collision Damage Waiver with €1,300 deductible' },
    { id: nextId(), text: 'Unlimited milage' }
]