import { useState, useContext, useEffect } from "react";

import { FilterPanel, CarsList, PickupReturnLegend } from "../../components"

import classes from './styles/car-search.module.scss'

import { ServiceContext } from "../../context/service-context";



export default function CarDealsList() {
    const { cars, pickupReturnInfo, vendorNames } = useContext(ServiceContext);

    const [sortedAndFilteredCars, setFilteredAndSortedCars] = useState([]);

    const [filteringOptions, setFilteringOptions] = useState({})
    const [sortingType, setSortingType] = useState('ascending');

    useEffect(() => {
        cars?.length && setFilteredAndSortedCars([...cars]);
    }, [cars]);


    useEffect(() => {
        filterAndSortCars();
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
        console.log(newFilteringOptions);
        setFilteringOptions(newFilteringOptions);
    }


    const vendorsFilterHandler = (vendors) => {
        let newFilteringOptions = { ...filteringOptions };
        if (!vendors.length)
            delete newFilteringOptions['vendors'];
        else
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
        const sortedAndFilteredCars = filteredCars.length ? sortCars(filteredCars) : sortCars([...cars]);
        setFilteredAndSortedCars(() => sortedAndFilteredCars);
    }


    return (
        (sortedAndFilteredCars?.length
            &&
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
                        <CarsList
                            cars={sortedAndFilteredCars}
                        />
                    </div>
                </div>
            </PickupReturnLegend >)
    )
}
