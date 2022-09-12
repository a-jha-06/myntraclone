import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  name,
  description,
  finalPrice,
  otherImages,
  discount,
  strickPrice,
  index,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="indiv-tile-holder"
      onClick={() => {
        navigate(`/productModal/${index}`);
      }}
    >
      <img src={otherImages[0]} alt="" />
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <div className="prices">
        <div className="finalPrice">{finalPrice}</div>
        <div>
          <strike className="strikePrice">{strickPrice}</strike>
        </div>
        <div className="discount">{discount}%</div>
      </div>
    </div>
  );
};

export default Card;
