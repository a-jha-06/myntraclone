import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../data";

const ProductModal = ({ setCart, cart }) => {
  const [size, setSize] = useState("");
  const { index } = useParams();
  let productData = data[index];
  const links = productData.otherImages;
  const productSize = productData.productSize.toString().split(",");
  return (
    <div>
      <div className="route">
        Home / Clothing / {productData.gender === "M" ? "Men" : "Women"}{" "}
        Clothing / Shirts / {productData.name}
      </div>
      <div id="product-modal">
        <div id="otherImages">
          {links.map((e, i) => (
            <img key={i} src={e} alt="otherImage" />
          ))}
        </div>
        <div className="details">
          <div>
            <h2 className="name">{productData.name}</h2>
            <h3 className="description">{productData.description}</h3>
          </div>
          <hr />
          <div className="prices">
            <div className="finalPrice">
              <i className="rupee sign icon"></i>
              {productData.finalPrice}
            </div>
            <div>
              MRP{" "}
              <strike className="strikePrice">{productData.strickPrice}</strike>
            </div>
            <div className="discount">Discount {productData.discount}%</div>
          </div>
          <div>
            <h3>Size Chart</h3>
            {productSize.map((e, i) => (
              <button
                onClick={(e) => setSize(e.target.innerText)}
                className="size-option"
                key={i}
              >
                {e}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              const payload = {
                name: productData.name,
                description: productData.description,
                finalPrice: productData.finalPrice,
                strickPrice: productData.strickPrice,
                discount: productData.discount,
                otherImages: links,
                size: size,
              };
              if (size === "") {
                alert("Please select size");
              } else {
                setCart([...cart, payload]);
              }
            }}
          >
            Add to Cart
          </button>
        </div>
        <hr />
        <p>100% Original Products</p>
        <p>Pay on delivery might be available</p>
        <p>Easy 30 days returns and exchanges</p>
        <p>Try & Buy might be available</p>
      </div>
    </div>
  );
};

export default ProductModal;
