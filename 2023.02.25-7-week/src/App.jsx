import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Lorem } from "./components/Lorem";
import { Hero } from "./components/Hero";

function App() {
return (
  <BrowserRouter>
    <Navbar/>
    <Hero/>
    <Lorem/>
    <Footer />
  </BrowserRouter>
);
}

export default App;

//Route Routes Switch Router