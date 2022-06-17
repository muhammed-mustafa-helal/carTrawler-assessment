import classes from './styles/filter-panel.module.scss'

export default function FilterPanel() {
  return (
    <div className={classes['filter-panel']}>
      <div className={classes['filter-panel__header']}>
        <h2>Apply Sorting & Filters</h2>
        <hr />
      </div>
      <div className={classes['filter-panel__car-specs']}>
        <h2>Sort deals</h2>
        <div className={classes['filter-panel__car-specs--input']}>
          <input
            id='car spec'
            type="checkbox"
          />
          <label htmlFor='car spec'>Low to high</label>
        </div>

        <div className={classes['filter-panel__car-specs--input']}>
          <input
            id='car spec'
            type="checkbox"
          />
          <label htmlFor='car spec'>Recommended</label>
        </div>
        <hr />
      </div>
      <div className={classes['filter-panel__car-specs']}>
        <h2>Car Specs</h2>
        <div className={classes['filter-panel__car-specs--input']}>
          <input
            id='car spec'
            type="checkbox"
          />
          <label htmlFor='car spec'>Air conditioning</label>
        </div>

        <div className={classes['filter-panel__car-specs--input']}>
          <input
            id='car spec'
            type="checkbox"
          />
          <label htmlFor='car spec'>4+ doors</label>
        </div>
        <hr />
      </div>
      <div className={classes['filter-panel__car-specs']}>
        <h2>Transmission</h2>
        <div className={classes['filter-panel__car-specs--input']}>
          <input
            id='car spec'
            type="checkbox"
          />
          <label htmlFor='car spec'>Automatic</label>
        </div>

        <div className={classes['filter-panel__car-specs--input']}>
          <input
            id='car spec'
            type="checkbox"
          />
          <label htmlFor='car spec'>Manual</label>
        </div>
        <hr />
      </div>
      <div className={classes['filter-panel__car-specs']}>
        <h2>Suppliers</h2>
        <div className={classes['filter-panel__car-specs--input']}>
          <input
            id='car spec'
            type="checkbox"
          />
          <label htmlFor='car spec'>Alamo</label>
        </div>

        <div className={classes['filter-panel__car-specs--input']}>
          <input
            id='car spec'
            type="checkbox"
          />
          <label htmlFor='car spec'>Avis</label>
        </div>
        <div className={classes['filter-panel__car-specs--input']}>
          <input
            id='car spec'
            type="checkbox"
          />
          <label htmlFor='car spec'>Hertz</label>
        </div>
      </div>
    </div>
  )
}
