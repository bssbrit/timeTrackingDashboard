import { useState, useEffect } from "react";

import "./App.css";
import Stuff from "./components/Stuff";

function App() {
  const [data, setData] = useState(null);
  const [dataSelecionada, setSelecionada] = useState(null);
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
  /* 
  função (data, 'timeFrame'){
  
  
  }
  
  */
  const filterTimeframe = (data, timeFrame) => {
    console.log(data[0].timeframes[timeFrame]);
    data.forEach((item) => {
      const obj = {
        title: item.title,
        timeframes: {
          current: data[0].timeframes[timeFrame].current,
          previous: data[0].timeframes[timeFrame].previous,
        },
      };
      console.log(obj);
    });
  };
  return (
    <div id="dashboard">
      <button onClick={() => filterTimeframe(data, "daily")}>test</button>
      <div id="perfil">
        <div id="foto"></div>
        <div id="nome">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div id="timeFrameBtns">
        <button
          onClick={() => {
            console.log(data);
          }}
        >
          Daily
        </button>
        <button>Weekly</button>
        <button>Monthly</button>
      </div>
      <Stuff data={data} />
    </div>
  );
}

export default App;
