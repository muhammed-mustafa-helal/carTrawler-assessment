import { Navbar } from "./components";
import { FooterContainer } from "./containers";
import { CarsSearchPage, Homepage, CarDetailPage } from "./pages";

import { Routes, Route } from 'react-router-dom'



export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}>
        </Route>
        <Route path='/car-deals' element={<CarsSearchPage />}>
        </Route>
        <Route path='/:carId' element={<CarDetailPage />}>
        </Route>
      </Routes>
      <FooterContainer />
    </>
  );
}
