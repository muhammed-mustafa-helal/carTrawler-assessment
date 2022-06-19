import { useState } from 'react';

import classes from './styles/filter-panel.module.scss'
import { Checkbox, Radio } from '../'

export default function FilterPanel({ sortingTechnique }) {
  const [priceSortingTechnique, setPriceSortingTechnique] = useState('ascending')


  const handlePriceSortingTechniqueChange = (e) => {
    setPriceSortingTechnique(() => e.target.value);
    sortingTechnique(e.target.value);
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
          handleChange={handlePriceSortingTechniqueChange}
          checked={priceSortingTechnique === 'ascending'}
        />
        <Radio
          id='descending'
          title='High to low'
          value='descending'
          name='sorting-technique'
          handleChange={handlePriceSortingTechniqueChange}
          checked={priceSortingTechnique === 'descending'}
        />

        <hr />
      </div>
      <div className={classes['filter-panel__car-filters']}>
        <h2>Car Specs</h2>

        <Checkbox
          id={'air-conditioning'}
          title='Air conditioning'
          name='air-conditioning'
        />
        <Checkbox
          id={'four-more-doors'}
          title='4+ Doors'
          name='four-more-doors'
        />
        <Checkbox
          id={'three-more-bags'}
          title='3+ Bags'
          name='three-more-bags'
        />
        <hr />
      </div>
      <div className={classes['filter-panel__car-filters']}>
        <h2>Transmission</h2>
        <Checkbox
          id={'automatic'}
          title='Automatic'
          name='automatic'
        />
        <Checkbox
          id={'manual'}
          title='Manual'
          name='manual'
        />
        <hr />
      </div>
      <div className={classes['filter-panel__car-filters']}>
        <h2>Vendors</h2>
        <Checkbox
          id={'alamo'}
          title='Alamo'
          name='alamo'
        />
        <Checkbox
          id={'alvis'}
          title='Alvis'
          name='alvis'
        />
        <Checkbox
          id={'hertz'}
          title='Hertz'
          name='hertz'
        />
      </div>
    </div>
  )
}
