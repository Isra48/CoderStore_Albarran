import "./cartwidget.css";
import bag from "../assets/bag.png";

function Cw() {
  return (
    <div className="carwidget">
      <img className="bag" alt="shoping_cart" src={bag} />
      <p className="counter"> 3</p>
    </div>
  );
}
export default Cw;
