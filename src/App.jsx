import { useState, useEffect } from "react";

import "./App.css";
import Stuff from "./components/Stuff";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../assets/data.json");
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div id="dashboard">
      <div id="perfil">
        <div id="foto"></div>
        <div id="nome">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div id="timeFrameBtns">
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthly</button>
      </div>
      <Stuff />
      {/* os botões vão fazer uma map no array data e só mandar o que precisar */}
    </div>
  );
}

export default App;
