import "./App.css";
import Navbar from "./components/NavBar";
import List from "./components/itemListContainer";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("esta es una prop");

  return (
    <div className="App">
      <Navbar />
      <List message={message} />
    </div>
  );
}

export default App;
