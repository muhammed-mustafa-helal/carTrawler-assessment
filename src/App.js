
import { Navbar } from "./components";
import { FooterContainer } from "./containers";

import { AnimatedRoutes } from "./pages";

import { ServiceContextProvider } from './services/context/service-context';

export default function App() {


  return (
    <ServiceContextProvider>
      <Navbar />
      <AnimatedRoutes />
      <FooterContainer />
    </ServiceContextProvider>
  );
}


