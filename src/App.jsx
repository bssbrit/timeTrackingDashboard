import { useState, useEffect } from "react";

import Stuff from "./components/Stuff";

function App() {
  const [data, setData] = useState(null);
  const [dataSelecionada, setSelecionada] = useState(null);
  const filterTimeframe = (data, timeFrame) => {
    let dataArr = [];
    data.forEach((item) => {
      const obj = {
        title: item.title,
        timeframes: {
          current: item.timeframes[timeFrame].current,
          previous: item.timeframes[timeFrame].previous,
        },
        choosenTime: timeFrame,
      };
      dataArr.push(obj);
    });
    setSelecionada(dataArr);
    console.log(dataSelecionada);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../assets/data.json");
        const data = await response.json();
        setData(data);
        console.log(data);
        filterTimeframe(data, "daily");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div id="dashboard">
      <div id="profileDiv">
        <div id="perfil">
          <div id="foto">
            <img
              src="../assets/images/image-jeremy.png"
              alt="jeremy profille image"
            />
          </div>
          <div id="nome">
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div id="timeFrameBtns">
          <button
            onClick={() => {
              filterTimeframe(data, "daily");
            }}
          >
            Daily
          </button>
          <button
            onClick={() => {
              filterTimeframe(data, "weekly");
            }}
          >
            Weekly
          </button>
          <button
            onClick={() => {
              filterTimeframe(data, "monthly");
            }}
          >
            Monthly
          </button>
        </div>
      </div>

      <Stuff data={dataSelecionada} />
    </div>
  );
}

export default App;
