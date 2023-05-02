import { useState } from "react";
import nonfictionData from "../nonfiction.json"
import BookCard from "./BookCard";

export default function NonFiction(pros) {

  let [data,setData] = useState(nonfictionData);
const {val}= pros
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
        { data.map( (e)=>{
          return <>  < BookCard img={e.img} title={e.title} price={e.price}
          author={e.author} year={e.year} />  </> 
        })}
      </div>
    </div>
  );
}
