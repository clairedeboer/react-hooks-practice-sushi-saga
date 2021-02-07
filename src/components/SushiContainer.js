import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({
  sushiList,
  onEatSushi,
  onChangeTotal,
  remainingMoney,
  onShowMoreSushi
}) {
  const sushiComponents = sushiList.map((sushi) => {
    return (
      <Sushi
        key={sushi.id}
        onEatSushi={onEatSushi}
        onChangeTotal={onChangeTotal}
        remainingMoney={remainingMoney}
        image={sushi.img_url}
        name={sushi.name}
        price={sushi.price}
      />
    );
  });

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onShowMoreSushi={onShowMoreSushi} />
    </div>
  );
}

export default SushiContainer;
