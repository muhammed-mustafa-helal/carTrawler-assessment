import { BsCheck } from 'react-icons/bs'
import { IconContext } from "react-icons";

import classes from './styles/deal-perks.module.scss'

import { greatChoice, greatPrice } from '../../fixtures/dealPerks';

export default function DealPerks() {
    return (
        <div className={classes['deal-perks']}>
            <IconContext.Provider value={{ color: "#00d2a8", className: 'react-icons' }}>
                <h1>Great choice!</h1>
                <div className={classes['deal-perks__choice']}>
                    <ul>
                        {greatChoice.map(({ id, text }) => (
                            <li key={id}>
                                <BsCheck />
                                {text}
                            </li>))}
                    </ul>
                    <img src='/images/good-choice.png' alt='good choice' />
                </div>
                <hr />
                <div className={classes['deal-perks__price']}>
                    <h1>Included in the price</h1>
                    <ul>
                        {greatPrice.map(({ id, text }) => (
                            <li key={id}>
                                <BsCheck />
                                {text}
                            </li>))}
                    </ul>
                </div>
            </IconContext.Provider>
        </div>
    )
}
