import { Navbar } from "./components";
import { FooterContainer } from "./containers";

import { Homepage, SearchingForDealsPage, CarDealsList, CarDetailsPage } from "./pages";

import { Routes, Route } from 'react-router-dom'



export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}>
        </Route>
        <Route path='/search-for-deals' element={<SearchingForDealsPage />}>
        </Route>
        <Route path='/cars-deals' element={<CarDealsList />}>
        </Route>
        <Route path='car-details/:carId' element={<CarDetailsPage />}>
        </Route>
      </Routes>
      <FooterContainer />
    </>
  );
}
