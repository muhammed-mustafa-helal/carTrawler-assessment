import { Navbar } from "./components";
import { FooterContainer } from "./containers";
import { CarsSearchPage } from "./pages";


export default function App() {
  return (
    <>
      <Navbar />
      <CarsSearchPage />
      <FooterContainer />
    </>
  );
}
