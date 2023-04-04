import React, { useState }  from "react";
import { useParams } from "react-router-dom";
type urlParams={
  id:number;
}
function Counter()
{

  const {id}=useParams<urlParams |any>();

   
      const [count,setCount]= useState(0);
      function test()
      {
        let data=count+1;
         setCount(0);
      }
    return (
        <>
        <p>{count}--value from parameters-{id}</p>
        <button onClick={test}>+</button>
        </>
    )
}
export default Counter;
