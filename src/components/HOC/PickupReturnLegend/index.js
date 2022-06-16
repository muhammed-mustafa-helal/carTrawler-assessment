import './styles/pickup-return-legend.scss';

export default function PickupReturnLegend({children}) {
  return (
    <fieldset>
      <legend>
        Las Vegas Airport ---- Las Vegas Airport
      </legend>
      {children}
    </fieldset>
  )
}
