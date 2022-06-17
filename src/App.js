import { Navbar } from "./components";
import { FooterContainer } from "./containers";
import { Homepage, SearchingForDealsPage, CarsSearchPage, CarDetailPage } from "./pages";

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
        <Route path='/car-deals' element={<CarsSearchPage />}>
        </Route>
        <Route path='car-detail/:carId' element={<CarDetailPage />}>
        </Route>
      </Routes>
      <FooterContainer />
    </>
  );
}
