
import { Navbar } from "./components";
import { FooterContainer } from "./containers";

import { AnimatedRoutes } from "./pages";

import { ServiceContextProvider } from './context/service-context';

export default function App() {


  return (
    <ServiceContextProvider>
      <Navbar />
      <AnimatedRoutes />
      <FooterContainer />
    </ServiceContextProvider>
  );
}


