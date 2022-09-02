import React from "react";
import "./itemCount.css";
import { useState } from "react";

function ItemCount() {
 const [count, setCount] = useState(0)
 
  return (
    <div className="itemCount">
      <button className="btnl" onClick={() => {
        if (count >  0) {
          setCount(count - 1) ;

        }
      else{
        setCount (0);

      }
      
        
      }

      } > - </button>
      <div className="contador"> {count}</div>

      <button className="btnr" onClick={() => setCount(count + 1)}>  + </button>
    </div>
  );
}
export default ItemCount;
