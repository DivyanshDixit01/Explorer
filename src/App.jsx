import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import { Home }  from "./pages/Home";
import {Footer} from "./component/Footer";
import TopCitiesMPList from "./pages/TopCitiesMPList";
import CitiesDetail from "./assets/City/CitiesDetail";
import Services from "./pages/Services";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TopcitiesMPList" element={<TopCitiesMPList />} />
       <Route path="/city/:id" element={<CitiesDetail/>} />
       <Route path="/Services" element={<Services />} />
    
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;