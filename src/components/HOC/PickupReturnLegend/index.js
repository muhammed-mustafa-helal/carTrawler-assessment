import './styles/pickup-return-legend.scss';

import { FaAngleDoubleRight } from 'react-icons/fa'
export default function PickupReturnLegend({ children }) {

  const iconStyle = { width: "100px" };

  return (
    <div className='pickup-return'>
      <fieldset>
        <legend>
          <div className='pickup-return__pickup'>
            <p>Las Vegas Airport</p>
            <p>10:00 AM</p>
          </div>
          <div>
            <FaAngleDoubleRight style={iconStyle} />
          </div>
          <div className='pickup-return__return'>
            <p>Las Vegas Airport</p>
            <p>10:00 AM</p>
          </div>
        </legend>
      </fieldset>
      {children}
    </div>
  )
}