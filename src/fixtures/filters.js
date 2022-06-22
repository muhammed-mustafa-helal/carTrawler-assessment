
import { AIR_CONDITIONING_FILTER, FOUR_DOORS_FILTER, THREE_BAGS_FILTER } from "../constants/filteringThresholds";

export const sortingFiltersFix = [
    { id: 'ascending', title: 'Low to high', value: 'ascending', name: 'sorting-technique' },
    { id: 'descending', title: 'High to low', value: 'descending', name: 'sorting-technique' },
]

export const transmissionFiltersFix = [
    { id: 'automatic', title: 'Automatic', value: 'Automatic', name: 'Automatic' },
    { id: 'manual', title: 'Manual', value: 'Manual', name: 'Manual' },
]

export const carSpecsFiltersFix = [
    { id: 'air-conditioning', title: 'Air conditioning', name: 'airConditioning', value: AIR_CONDITIONING_FILTER },
    { id: 'four-more-doors', title: '4+ Doors', name: 'fourDoors', value: FOUR_DOORS_FILTER },
    { id: 'three-more-bags', title: '3+ Bags', name: 'threeBags', value: THREE_BAGS_FILTER }
]