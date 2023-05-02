import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Counter from './counter';
function App() {
  const  [fetchdata, setfetchdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null)
  return (
    <div className="App">
      < Counter />
      <button onClick={()=>{
        setloading(true);
        fetch(`https://jsonplaceholder.typicode.com/todos`).then((res)=>{return res.json()})
        .then((data)=>{console.table(data);
        setfetchdata(data);
        setloading(false)})
        .catch((err)=>{console.log(err)
        seterror(err.message)})
        .finally(()=>{setloading(false)})
      }}>Fetch
      </button>
       {/* {conditional rendering} */}

     { loading ? <h1>Loading.....</h1> : null}
     {/* {optional Chaining} */}

     {fetchdata?.map((elem)=>{
       return <h1>{elem.title}</h1>
     }) };

         
    </div>
  );
}

export default App;
