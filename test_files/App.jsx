import { useState,useEffect } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";

function App() {
  let [count,setCount] = useState("Show Non-Fiction Books");
  

    
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={()=>{
           if(count==="Show Non-Fiction Books"){
               setCount(" Show Fictional Books")
           }else{
            setCount("Show Non-Fiction Books")
           }
      }}>{count}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {count==="Show Non-Fiction Books"?< Fiction val={count} />:<NonFiction val={count}/>}
      </div>
    </div>
  );
}

export default App;
