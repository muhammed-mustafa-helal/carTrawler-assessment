import { SearchForm, Brands } from '../../components'

import { motion } from 'framer-motion';

export default function Homepage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SearchForm data-testid='search-form' />
            <Brands data-testid='brands' />
        </ motion.div >
    )
}
