import classes from './styles/pickup-return-legend.module.scss';

import { FaAngleDoubleRight } from 'react-icons/fa'
export default function PickupReturnLegend({ children }) {

  const iconStyle = { width: "100px" };

  return (
    <div className={classes['pickup-return']}>
      <fieldset>
        <legend>
          <div className={classes['pickup-return__pickup']}>
            <p>Las Vegas Airport</p>
            <p>10:00 AM</p>
          </div>
          <div>
            <FaAngleDoubleRight style={iconStyle} />
          </div>
          <div className={classes['pickup-return__return']}>
            <p>Las Vegas Airport</p>
            <p>10:00 AM</p>
          </div>
        </legend>
      </fieldset>
      {children}
    </div>
  )
}