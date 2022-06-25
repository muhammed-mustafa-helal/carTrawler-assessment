import { useState } from 'react';

import { Checkbox, Radio } from '../'

import classes from './styles/filter-panel.module.scss'

import { sortingFiltersFix, transmissionFiltersFix, carSpecsFiltersFix } from '../../utils/fixtures/filters';

import { capitalizeFirstLetter } from '../../utils/helpers'


export default function FilterPanel({ sortingType, transmissionFilter, carSpecsFilter, vendorsFilter, vendorNames }) {
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
        {sortingFiltersFix.map(({ id, title, value, name }) => (
          <Radio
            key={id}
            id={id}
            title={title}
            value={value}
            name={name}
            handleChange={handleSortingChange}
            checked={priceSortingTechnique === value}
          />
        ))}
        <hr />
      </div>

      <div className={classes['filter-panel__car-filters']}>
        <h2>Transmission</h2>
        {transmissionFiltersFix.map(({ id, title, value, name }) => (
          <Checkbox
            key={id}
            id={id}
            title={title}
            name={name}
            value={value}
            handleChange={handleTransmissionFilterChange}
            checked={transmissionType === value}
          />
        ))}
        <hr />
      </div>

      <div className={classes['filter-panel__car-filters']}>
        <h2>Car Specs</h2>
        {carSpecsFiltersFix.map(({ id, title, name, value }) => (
          <Checkbox
            key={id}
            id={id}
            title={title}
            name={name}
            value={value}
            handleChange={handleCarSpecsFilterChange}
            checked={carSpecsOptions[name] === value}
          />
        ))}
        <hr />
      </div>
      <div className={classes['filter-panel__car-filters']}>
        <h2>Vendors</h2>
        {vendorNames.map((vendor) => (
          <Checkbox
            id={vendor}
            key={vendor}
            title={capitalizeFirstLetter(vendor)}
            name={vendor}
            handleChange={handleVendorsFilterChange}
            value={vendor}
            checked={vendors.includes(vendor)}
          />
        ))}
      </div>
    </div>
  )
}
