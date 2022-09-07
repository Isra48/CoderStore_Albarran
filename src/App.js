import "./App.css";
import Navbar from "./components/NavBar";
import List from "./components/itemListContainer";
import { useState } from "react";
import products from "./components/products"

function App() {
  const [message, setMessage] = useState(products);
  const onadd =()=>{
    alert('producto agrregado')

  }

  return (
    <div className="App">
      <Navbar />
      <List message={message} onadd={onadd} />
    </div>
  );
}

export default App;
