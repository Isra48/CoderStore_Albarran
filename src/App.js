import "./App.css";
import Navbar from "./components/NavBar";
import List from "./components/itemListContainer";
import { useEffect, useState } from "react";
import products from "./components/products"

function App() {
  const [message, setMessage] = useState([]);
  useEffect( ()=>{
    const  getData =async()=>{
      await setTimeout(()=>{
      setMessage(products)
  
      },2000)
      
  
    }
    getData()
  })
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
