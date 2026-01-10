import React from "react";
import Popup from "./Popup";
import { useState } from "react";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card">
      <h2>Card Component</h2>
      <button
        onClick={function () {
          setIsOpen(true);
        }}
      >
        More Details
      </button>
      {isOpen && <Popup close={() => setIsOpen(false)} />}
    </div>
  );
};

export default Card;

//step: prothome usestate banabo isopen bole setake false diye initialize korbo
//step: button er onClick e ekta function debo ja click korle isOpen ke true kore debe
//step: conditional rendering diye jodi isOpen true hoy tahole Popup component ta dekhabe
//step: Popup component ke import korte hobe
//step: Popup component ke Card component er moddhe use korte hobe
//step: Popup component ke close korar jonno ekta close function banabo ja button click korle isOpen ke false kore debe
//step: ei close function ta ke Popup component e props hishebe pathabo
//step: Popup component er moddhe close button er onClick e ei close function ta use korbo
//step: ei vabe Card component theke Popup component ke open and close kora jabe
