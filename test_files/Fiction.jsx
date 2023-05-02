import { useState } from "react";
import fictionData from "../fiction.json"
import BookCard from "./BookCard";

export default function Fiction(pros) {
 let [data,setData] = useState(fictionData);
const {val}= pros
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Books</h1>

      <div className="books-container">
        {/* Map all Fictional Books here */}
        { data.map( (e)=>{
          return <>  < BookCard img={e.img} title={e.title} price={e.price}
          author={e.author} year={e.year} />  </> 
        })}
      </div>
    </div>
  );
}
