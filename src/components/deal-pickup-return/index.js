import classes from './styles/deal-pickup-return.module.scss'

export default function DealPickupReturn() {
  return (
    <div className={classes['deal-pickup-return']}>
      <h1>Pick-up and drop-off</h1>
      <div className={classes['deal-pickup-return__time']}>
        <p>Sun, Mar 22. 10:00 AM</p>
        <p>Las Vegas - Airport</p>
      </div>
      <hr />
      <div className={classes['deal-pickup-return__time']}>
        <p>Mon, Apr 06. 10:00 AM</p>
        <p>Las Vegas - Airport</p>
      </div>
    </div>
  )
}
