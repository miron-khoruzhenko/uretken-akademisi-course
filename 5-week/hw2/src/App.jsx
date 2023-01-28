import { Component } from "react";
import DegBlock from "./components/DegBlock";
import DegBlock1 from "./components/DegBlock1";
import DegBlock2 from "./components/DegBlock2";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
			degree: 0,

    }
  }

  handleChange(e){
    if(parseInt(e.target.value))
      this.setState({degree: parseInt(e.target.value)})
    else
      this.setState({degree: 0})
  }

  render(){
  return (
    <>
    <h1 className="text-4xl text-center text-slate-800 my-2">Weather Calculator</h1>
    <div className="control-panel container mx-auto my-4 flex flex-wrap justify-center items-center max-sm:flex-col max-sm:space-y-4">
      <button 
        className="px-8 
                  py-4 
                bg-slate-500
                text-white
                  rounded-full
                  border-2
                  border-slate-600" 
        onClick={() => this.setState({degree: this.state.degree - 1})}
        >-1</button>
        <input type="text" 
          className="px-8
                    py-4
                    mx-4
                  bg-slate-200
                    border-2
                    border-slate-600
                    rounded-full"
          onChange={this.handleChange.bind(this)}/>
        <button 
        className="px-8 
                  py-4 
                bg-slate-500
                text-white
                  rounded-full
                  border-2
                  border-slate-600" 
        onClick={() => this.setState({degree: this.state.degree + 1})}
        >+1</button>


    </div>

      <div className="container mx-auto flex flex-wrap max-sm:space-x-0 justify-center space-x-4">
        <DegBlock value={this.state.degree}/>
        <DegBlock1 value={(this.state.degree * 9/5 + 32).toFixed(2)}/>
        <DegBlock2 value={(this.state.degree + 273.15).toFixed(2)}/>

      </div>
    </>
  );
  }
}

export default App;