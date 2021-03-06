import { useState, useContext, useEffect } from "react";

import { motion } from 'framer-motion'

import { FilterPanel, CarsList, PickupReturnLegend, LoadingSpinner, ClearFilters } from "../../components"

import classes from './styles/car-deals.module.scss'

import { ServiceContext } from "../../services/context/service-context";



export default function CarDealsList() {
    const { cars, pickupReturnInfo, vendorNames } = useContext(ServiceContext);

    const [sortedAndFilteredCars, setFilteredAndSortedCars] = useState([]);
    const [filteringOptions, setFilteringOptions] = useState({})
    const [sortingType, setSortingType] = useState('ascending');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        cars?.length && setFilteredAndSortedCars([...cars]);
        setIsLoading(false);
    }, [cars]);


    useEffect(() => {
        setIsLoading(true);
        filterAndSortCars();
        setIsLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filteringOptions, sortingType]);


    const sortingTypeHandler = (sortingType) => {
        setSortingType(sortingType);
    }

    const transmissionFilterHandler = (transmissionType) => {
        let newFilteringOptions = { ...filteringOptions };
        if (!transmissionType.length) {
            delete newFilteringOptions['transmissionType'];
        }
        else {
            newFilteringOptions['transmissionType'] = transmissionType;
        }
        setFilteringOptions(newFilteringOptions);
    }

    const carSpecsFilterHandler = (carSpecs) => {
        let newFilteringOptions = { ...filteringOptions };

        carSpecs.airConditioning ?
            newFilteringOptions.airConditioning = carSpecs.airConditioning :
            delete newFilteringOptions.airConditioning;

        carSpecs.fourDoors ?
            newFilteringOptions.fourDoors = carSpecs.fourDoors :
            delete newFilteringOptions.fourDoors;

        carSpecs.threeBags ?
            newFilteringOptions.threeBags = carSpecs.threeBags :
            delete newFilteringOptions.threeBags;

        setFilteringOptions(newFilteringOptions);
    }


    const vendorsFilterHandler = (vendors) => {
        let newFilteringOptions = { ...filteringOptions };
        (!vendors.length) ?
            delete newFilteringOptions['vendors'] :
            newFilteringOptions['vendors'] = vendors;

        setFilteringOptions(newFilteringOptions);
    }

    const filteringFunctions = {
        airConditioning: (car) => car.airConditioning === filteringOptions.airConditioning,
        fourDoors: (car) => car.doorCount >= filteringOptions.fourDoors,
        threeBags: (car) => car.baggageQuantity >= filteringOptions.threeBags,
        transmissionType: (car) => car.transmissionType === filteringOptions.transmissionType,
        vendors: (car) => filteringOptions.vendors.includes(car.vendorName)
    }

    const filterCars = (cars) => {
        let filteredCars = [...cars];
        for (const key in filteringOptions) {
            filteredCars = filteredCars.filter(filteringFunctions[key]);
        }
        return filteredCars;
    }

    const sortCars = (cars) => {
        const newlySortedCars = [...cars];
        sortingType === 'ascending' ?
            newlySortedCars.sort((a, b) => a.estimatedTotalAmount - b.estimatedTotalAmount) :
            newlySortedCars.sort((a, b) => b.estimatedTotalAmount - a.estimatedTotalAmount);
        return newlySortedCars;
    };


    const filterAndSortCars = () => {
        let newCars = [...cars];
        const filteredCars = filterCars(newCars);
        const sortedAndFilteredCars = sortCars(filteredCars);
        setFilteredAndSortedCars(() => sortedAndFilteredCars);
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <PickupReturnLegend pickupReturnInfo={pickupReturnInfo}>
                <div className={classes['car-search-page']}>
                    <div className={classes['car-search-page__container']}>
                        <FilterPanel
                            sortingType={sortingTypeHandler}
                            transmissionFilter={transmissionFilterHandler}
                            carSpecsFilter={carSpecsFilterHandler}
                            vendorsFilter={vendorsFilterHandler}
                            vendorNames={vendorNames}
                        />
                        {isLoading ? <LoadingSpinner /> : null}
                        {(Object.keys(filteringOptions).length > 0) && (!sortedAndFilteredCars.length > 0) && <ClearFilters />}
                        {(sortedAndFilteredCars?.length > 0) && !isLoading && (<CarsList
                            cars={sortedAndFilteredCars}
                        />)}
                    </div>
                </div>
            </PickupReturnLegend >
        </motion.div>
    )
}
