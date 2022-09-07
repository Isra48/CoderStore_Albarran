import React from "react";
import "./itemCount.css";
import { useState } from "react";

function ItemCount(props) {
 const [count, setCount] = useState(props.initial)
 
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

      <button className="btnr" onClick={() => {
        if (count >= props.stock){
          setCount(props.stock)
        }
        else{
          setCount(count + 1)

        }
    
      }

      }>  + </button>
      
   
    
    </div>
  );
}
export default ItemCount;
