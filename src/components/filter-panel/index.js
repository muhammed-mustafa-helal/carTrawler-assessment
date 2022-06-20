import { useState } from 'react';

import { Checkbox, Radio } from '../'

import classes from './styles/filter-panel.module.scss'

import { AIR_CONDITIONING_FILTER, FOUR_DOORS_FILTER, THREE_BAGS_FILTER } from "../../constants/filteringThresholds";

export default function FilterPanel({ sortingType, transmissionFilter, carSpecsFilter, vendorsFilter }) {
  const [priceSortingTechnique, setPriceSortingTechnique] = useState('ascending')
  const [transmissionType, setTransmissionType] = useState('')
  const [carSpecsOptions, setCarSpecsOptions] = useState({});
  const [vendors, setVendors] = useState([]);

  const handleSortingChange = (e) => {
    setPriceSortingTechnique(() => e.target.value);
    sortingType(e.target.value);
  }

  const handleTransmissionFilterChange = (e) => {
    if (e.target.checked) {
      transmissionFilter(e.target.value);
      setTransmissionType(e.target.value);
      return;
    }

    transmissionFilter('');
    setTransmissionType('');
  }

  const handleCarSpecsFilterChange = (e) => {
    let newCarSpecsOptions = { ...carSpecsOptions };

    e.target.checked ?
      newCarSpecsOptions[e.target.name] = e.target.value :
      delete newCarSpecsOptions[e.target.name];

    carSpecsFilter(newCarSpecsOptions)
    setCarSpecsOptions(newCarSpecsOptions);
  }

  const handleVendorsFilterChange = (e) => {
    let newVendorsFilters = [...vendors];

    e.target.checked ?
      newVendorsFilters.push(e.target.value) :
      newVendorsFilters = newVendorsFilters.filter(vendor => vendor !== e.target.value);

    vendorsFilter(newVendorsFilters);
    setVendors(newVendorsFilters);
  }


  return (
    <div className={classes['filter-panel']}>
      <div className={classes['filter-panel__header']}>
        <h2>Apply Sorting & Filters</h2>
        <hr />
      </div>

      <div className={classes['filter-panel__car-filters']}>
        <h2>Sort deals</h2>
        <Radio
          id='ascending'
          title='Low to high'
          value='ascending'
          name='sorting-technique'
          handleChange={handleSortingChange}
          checked={priceSortingTechnique === 'ascending'}
        />
        <Radio
          id='descending'
          title='High to low'
          value='descending'
          name='sorting-technique'
          handleChange={handleSortingChange}
          checked={priceSortingTechnique === 'descending'}
        />
        <hr />
      </div>

      <div className={classes['filter-panel__car-filters']}>
        <h2>Transmission</h2>
        <Checkbox
          id='automatic'
          title='Automatic'
          name='Automatic'
          value='Automatic'
          handleChange={handleTransmissionFilterChange}
          checked={transmissionType === 'Automatic'}
        />
        <Checkbox
          id='manual'
          title='Manual'
          name='Manual'
          value='Manual'
          handleChange={handleTransmissionFilterChange}
          checked={transmissionType === 'Manual'}
        />
        <hr />
      </div>

      <div className={classes['filter-panel__car-filters']}>
        <h2>Car Specs</h2>

        <Checkbox
          id='air-conditioning'
          title='Air conditioning'
          name='airConditioning'
          handleChange={handleCarSpecsFilterChange}
          value={AIR_CONDITIONING_FILTER}
          checked={carSpecsOptions.airConditioning === AIR_CONDITIONING_FILTER}
        />
        <Checkbox
          id='four-more-doors'
          title='4+ Doors'
          name='fourDoors'
          handleChange={handleCarSpecsFilterChange}
          value={FOUR_DOORS_FILTER}
          checked={carSpecsOptions.fourDoors === FOUR_DOORS_FILTER}
        />
        <Checkbox
          id='three-more-bags'
          title='3+ Bags'
          name='threeBags'
          handleChange={handleCarSpecsFilterChange}
          value={THREE_BAGS_FILTER}
          checked={carSpecsOptions.threeBags === THREE_BAGS_FILTER}
        />
        <hr />
      </div>
      <div className={classes['filter-panel__car-filters']}>
        <h2>Vendors</h2>
        <Checkbox
          id={'alamo'}
          title='Alamo'
          name='alamo'
          value='ALAMO'
          handleChange={handleVendorsFilterChange}
          checked={vendors.includes('ALAMO')}
        />
        <Checkbox
          id='avis'
          title='Avis'
          name='avis'
          value='AVIS'
          handleChange={handleVendorsFilterChange}
          checked={vendors.includes('AVIS')}
        />
        <Checkbox
          id={'hertz'}
          title='Hertz'
          name='hertz'
          value='HERTZ'
          handleChange={handleVendorsFilterChange}
          checked={vendors.includes('HERTZ')}
        />
      </div>
    </div>
  )
}
