
import Navbar from "./components/Navbar"
import Services from "./components/Services";
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <>


     
      <Navbar />
        
        <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
       <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
