import { Routes, Route, useLocation } from 'react-router-dom'

import { Homepage, SearchingForDealsPage, CarDealsList, CarDetailsPage } from "..";


import { HOME, SEARCH_DEALS, CAR_DEALS, CAR_DETAILS } from '../../utils/constants/routes';

import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={HOME} element={<Homepage />}>
                </Route>
                <Route path={SEARCH_DEALS} element={<SearchingForDealsPage />}>
                </Route>
                <Route path={CAR_DEALS} element={<CarDealsList />}>
                </Route>
                <Route path={CAR_DETAILS} element={<CarDetailsPage />}>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}
