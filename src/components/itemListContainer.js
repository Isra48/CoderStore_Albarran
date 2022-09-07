import "./itemListContainer.css";
import Item from "./Item";

function itemlistContainer(props) {
  return (
    <div className="Cards">
        {props.message.map((el)=>{
          console.log(el)
          return <Item key={el.id} data={el} onadd={props.onadd}/>

        })}


  
    </div>
  );
}
export default itemlistContainer;
