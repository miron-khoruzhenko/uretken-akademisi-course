import { useState } from "react";
import { DegBlock } from "./components/DegBlock";

function App() {
  const btnClass = "btn border-2 border-slate-400 py-2 px-8 mx-8 my-4 rounded-full hover:bg-slate-200 transition-colors"

  const [degree, setDegree] = useState(0)

  
  function handleChange(e){
    if(parseInt(e.target.value))
      setDegree(parseInt(e.target.value))
    else  
      setDegree(0)
  }

  return (
    <div className="text-center container mx-auto">

      <h1 className="my-3 text-xl">Weather Calculator</h1>

      {/* Control panel */}
      <div className="block max-sm:flex flex-col justify-center items-center">
        <button className={btnClass} onClick={() => setDegree(degree - 1)}>-1</button>
        <input type="text" 
          className="border-2 
                    border-solid 
                    rounded-full 
                    py-2 px-4 
                    border-slate-400" 
          onChange={handleChange}/>
        <button className={btnClass} onClick={() => setDegree(degree + 1)}>+1</button>
      </div>

      {/* Degree Blocks */}
      <div className="space-x-4 max-sm:space-x-0 max-sm:flex flex-wrap justify-around">
        <DegBlock name='Celcius'    unit='&deg;C' degValue={degree}/>
        <DegBlock name='Fahrenheit' unit='&deg;F' degValue={(degree*9/5+32).toFixed(2)}/>
        <DegBlock name='Kelvin'     unit='K'      degValue={(degree+273.15).toFixed(2)}/>
      </div>
    </div>
  );
}

export default App;
