import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Lorem } from "./components/Lorem";
import { Hero } from "./components/Hero";
import { useState } from "react";

function App() {
	const [darkMode, setDarkMode] = useState(true)
  const changeColorMode = () => {
    setDarkMode(!darkMode)
  }
  
return (
  <div className={`${darkMode ? 'dark' : ''} bg-zinc-100 `}>

    <BrowserRouter>
      <Navbar setDarkMode={changeColorMode} darkMode={darkMode}/>
      <Hero/>
      <Lorem/>
      <Footer />
    </BrowserRouter>
  </div>
);
}

export default App;

//Route Routes Switch Router