import { Routes, Route } from 'react-router-dom'

import { Navbar } from "./components";
import { FooterContainer } from "./containers";
import { Homepage, SearchingForDealsPage, CarDealsList, CarDetailsPage } from "./pages";


import { HOME, SEARCH_DEALS, CAR_DEALS, CAR_DETAILS } from './constants/routes'


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={HOME} element={<Homepage />}>
        </Route>
        <Route path={SEARCH_DEALS} element={<SearchingForDealsPage />}>
        </Route>
        <Route path={CAR_DEALS} element={<CarDealsList />}>
        </Route>
        <Route path={CAR_DETAILS} element={<CarDetailsPage />}>
        </Route>
      </Routes>
      <FooterContainer />
    </>
  );
}


