import './App.css';
import React, { useState, useRef } from 'react'; 
import "./index.css";

   function App() { 
      const inputVal= useRef(null); 
      const resultVal = useRef(null); 
      const [result, setResult] = useState(0); 
    
      function plus(props) { 
        props.preventDefault(); 
        setResult((previous_Result) => previous_Result + Number(inputVal.current.value));
        // Clear input after calculation
        inputVal.current.value = ""; 
      }; 
    
      function minus(props) { 
        props.preventDefault(); 
        setResult((previous_Result) => previous_Result - Number(inputVal.current.value)); 
        // Clear input after calculation
        inputVal.current.value = ""; 
      };
    
      function times(props) { 
        props.preventDefault(); 
        setResult((previous_Result) => previous_Result * Number(inputVal.current.value)); 
        inputVal.current.value = ""; 
      }; 
    
      function divide(props) { 
        props.preventDefault(); 
        setResult((previous_Result) => previous_Result / Number(inputVal.current.value)); 
        inputVal.current.value = ""; 
      };
    
      function resetInput(props) { 
        props.preventDefault(); 
        // Clear input
        inputVal.current.value = ""; 
      }; 
    
      function resetResult(props) { 
        props.preventDefault(); 
        setResult(0); // Reset result to 0
        inputVal.current.value = ""; 
      }; 
    
      return ( 
        <div className="App"> 
          <div> 
            <h1>Simplest Working Calculator</h1> 
          </div> 
          <form> 
            <p ref={resultVal}> 
              {result}
            </p> 
            <input
              ref={inputVal} 
              type="number" 
              placeholder="Type a number" 
            /> 
            <button onClick={plus}>Add</button>
            <button onClick={minus}>Subtract</button>
            <button onClick={times}>Multiply</button>
            <button onClick={divide}>Divide</button>
            <button onClick={resetInput}>Reset Input</button>
            <button onClick={resetResult}>Reset Result</button>
          </form> 
        </div> 
      ); 
    } 
    
    


export default App;
