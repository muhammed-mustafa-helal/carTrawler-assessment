import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

import { SearchDeals } from '../../components';

import classes from './styles/searching-for-deals-page.module.scss';

export default function SearchingForDealsPage() {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/cars-deals')
        }, 2500);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <motion.div
            className={classes['searching-for-deals']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SearchDeals />
        </motion.div>
    )
}
