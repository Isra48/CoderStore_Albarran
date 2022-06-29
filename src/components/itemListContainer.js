import "./itemListContainer.css";

function itemlistContainer(props) {
  return (
    <div className="Cards">
      <div className="Card">1 {props.message}</div>
      <div className="Card">2{props.message}</div>
      <div className="Card">3 {props.message} </div>
    </div>
  );
}
export default itemlistContainer;
