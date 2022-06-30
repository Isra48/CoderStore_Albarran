import "./itemListContainer.css";
import ItemCount from "./itemCount";

function itemlistContainer(props) {
  return (
    <div className="Cards">
      <div className="Card">
        1 {props.message}
        <ItemCount />
      </div>
      <div className="Card">
        2{props.message}
        <ItemCount />
      </div>
      <div className="Card">
        3 {props.message}
        <ItemCount />
      </div>
    </div>
  );
}
export default itemlistContainer;
