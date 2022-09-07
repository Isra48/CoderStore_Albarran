import React from 'react'
import ItemCount from './itemCount'
import './Item.css'

function Item(props) {
  return (
   
        <div className="Card">

     <p>{props.data.category}</p>   
     <img src={props.data.image} className="img_producto" /> 
        
    <p>{props.data.title}</p>
    <ItemCount initial={props.data.initial}  stock={props.data.stock}/>
   <div className="btn_carrito_container"> <a className="btn_carrito" onClick={props.onadd}> Add to cart </a> </div>
  
  </div>
  )
}

export default Item