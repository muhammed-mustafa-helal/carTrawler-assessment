import './styles/pickup-return-legend.scss';

export default function PickupReturnLegend(props) {
  return (
    <fieldset>
      <legend>
        Las Vegas Airport ---- Las Vegas Airport
      </legend>
      {props.children}
    </fieldset>
  )
}
