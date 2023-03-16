import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { PageNotFound } from './pages/PageNotFound';
import { ProductListing } from './components/ProductListing'
import { ProductDetails } from './components/ProductDetails'
// import { Home } from './pages/Home'

function App() {
	const [darkMode, setDarkMode] = useState(true)
  const changeColorMode = () => {
    setDarkMode(!darkMode)
  }
  
return (
  <div className={`${darkMode ? 'dark bg-zinc-900 text-zinc-300' : 'bg-zinc-100'} ` +
    `transition-colors duration-300 `}>

    <BrowserRouter>
      <Navbar setDarkMode={changeColorMode} darkMode={darkMode}/>
      
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </div>
);
}

export default App;

//Route Routes Switch Router