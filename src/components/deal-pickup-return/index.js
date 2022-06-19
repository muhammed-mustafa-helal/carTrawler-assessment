import classes from './styles/deal-pickup-return.module.scss'

export default function DealPickupReturn({ pickupReturnInfo }) {
  return (
    <div className={classes['deal-pickup-return']}>
      <h1>Pick-up and drop-off</h1>
      <div className={classes['deal-pickup-return__time']}>
        <p>{pickupReturnInfo.pickupDate}</p>
        <p>{pickupReturnInfo.pickupLocation}</p>
      </div>
      <hr />
      <div className={classes['deal-pickup-return__time']}>
        <p>{pickupReturnInfo.returnDate}</p>
        <p>{pickupReturnInfo.returnLocation}</p>
      </div>
    </div>
  )
}
