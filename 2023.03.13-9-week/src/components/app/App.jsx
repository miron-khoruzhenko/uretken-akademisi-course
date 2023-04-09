import {Route, Routes,} from "react-router-dom"

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

import { Welcome } from "../welcome/Welcome";
import {MovieListening} from '../movie/MovieListening'
import { NotFound } from "../notFound/NotFound";

function App() {
  return (
    <div className={`
      transition-colors duration-300
      bg-black font-[Lato]`}>

      <Routes>
        <Route element={<Welcome/>} path={'/'}/>
        <Route element={<MovieListening/>} path={'/list'}/>
        <Route element={<NotFound/>} path={'/*'}/>
      </Routes>
        
      <Footer/>
    </div>
  );
}

export default App;
