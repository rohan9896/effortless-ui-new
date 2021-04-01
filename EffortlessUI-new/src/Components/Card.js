import React from "react";
import "../base.css";
import "./Card.css";
import CodeContainer from "./CodeContainer";
import Description from "./Description";
import "./Heading.css";

function Card() {
  const copyCode = `
  <div class="card">
  <img
    alt="model"
    src="https://bit.ly/2NY8Tx4"
  ></img>
  <div class="productInfo">
    <p>Product Name</p>
    <small>A short description</small>
    <small>Rating: 4.5/5</small>
    <p>₹2999</p>
    <small>Instock</small>
  </div>
  <button class="primary-button pink">Add To Cart</button>
  <span class="badge">New!</span>
  <span class="heart">
    <img
      class="ecomm__icon"
      src="https://bit.ly/3rtgodg"
      alt="white heart"
    />
  </span>
</div>
  `;

  return (
    <div className="Card__container">
      <h1 className="title">Cards</h1>
      <Description desc="Card is used to display information about any person/product/etc." />
      <div className="card">
        <img
          alt="model"
          src="https://bit.ly/2NY8Tx4"
        ></img>
        <div className="productInfo">
          <p>Product Name</p>
          <small>A short description</small>
          <small>Rating: 4.5/5</small>
          <p>₹2999</p>
          <small>Instock</small>
        </div>
        <button className="primary-button pink">Add To Cart</button>
        <span className="badge">New!</span>
        <span className="heart">
          <img
            class="ecomm__icon"
            src="https://bit.ly/3rtgodg"
            alt="white heart"
            style={{height: "2rem", width: "2rem"}}
          />
        </span>
      </div>
      <CodeContainer codeForCopy={copyCode} />
    </div>
  );
}

export default Card;