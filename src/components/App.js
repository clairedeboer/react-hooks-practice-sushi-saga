import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([])
  const [displaySushi, setDisplaySushi] = useState([])
  const [plates, setPlates] = useState([])
  const [remainingMoney, setRemainingMoney] = useState(60)
  const [index, setIndex] = useState(0)

  // const [displayFour, setDisplayFour] = useState(sushiList.slice(0, 4))
const onEatSushi = () => {
  setPlates([...plates, 1])
}

const onChangeTotal = (price) => {
  setRemainingMoney(remainingMoney - price)
}

const showMoreSushi = () => {
  setIndex((index) => index + 4)
  const newIndex = index + 4
  setDisplaySushi(sushiList.slice(newIndex, newIndex + 4))
  console.log(sushiList)
}

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushiData) => {
        setSushiList(sushiData)
        setDisplaySushi(sushiData.slice(0, index + 4))});
  }, []); 
  

  return (
    <div className="app">
      <SushiContainer sushiList={displaySushi} onShowMoreSushi={showMoreSushi} onEatSushi={onEatSushi} onChangeTotal={onChangeTotal} remainingMoney={remainingMoney}/>
      <Table plates={plates} remainingMoney={remainingMoney}/>
    </div>
  );
}

export default App;
