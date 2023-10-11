import './App.css';
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Career from "./Components/Career";
import Contact from "./Components/Contact";
import Register from "./Components/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Register />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
