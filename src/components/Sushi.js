import React, { useState } from "react";

function Sushi({ image, name, price, onEatSushi, onChangeTotal, remainingMoney }) {
  const [showImage, setShowImage] = useState(true);

  const handleClick = () => {
    if (remainingMoney > price) {
    setShowImage(false);
    onEatSushi()
    onChangeTotal(price)
    } else {
      alert ("You ran out of sushi money")
    }
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {showImage ? <img src={image} alt={name} width="100%" /> : null}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
