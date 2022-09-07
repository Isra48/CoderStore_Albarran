import "./itemListContainer.css";
import ItemCount from "./itemCount";

function itemlistContainer(props) {
  return (
    <div className="Cards">
        {props.message.map((el)=>{
          console.log(el)
          return <div className="Card">
         {el.title}
         <ItemCount initial={el.initial}  stock={el.stock}/>
        <div className="btn_carrito_container"> <a className="btn_carrito" onClick={props.onadd}> Add to cart </a> </div>
       
       </div>

        })}


  
    </div>
  );
}
export default itemlistContainer;
