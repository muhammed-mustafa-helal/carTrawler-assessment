import classes from './styles/pickup-return-legend.module.scss';

import { FaAngleDoubleRight } from 'react-icons/fa'
export default function PickupReturnLegend({ children, pickupReturnInfo }) {

  const iconStyle = { width: "100px" };

  return (
    <div className={classes['pickup-return']}>
      <fieldset>
        <legend>
          <div className={classes['pickup-return__pickup']}>
            <p>{pickupReturnInfo.pickupLocation}</p>
            <p>{pickupReturnInfo.pickupDate}</p>
          </div>
          <div>
            <FaAngleDoubleRight style={iconStyle} />
          </div>
          <div className={classes['pickup-return__return']}>
            <p>{pickupReturnInfo.returnLocation}</p>
            <p>{pickupReturnInfo.returnDate}</p>
          </div>
        </legend>
      </fieldset>
      {children}
    </div>
  )
}