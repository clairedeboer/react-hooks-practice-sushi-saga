import React from "react";

function MoreButton({onShowMoreSushi}) {
  const handleShowMoreSushi = () => {
    onShowMoreSushi()
  }

  return <button onClick={handleShowMoreSushi}>More sushi!</button>;
}

export default MoreButton;
