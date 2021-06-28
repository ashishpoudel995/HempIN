import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Magnifier from "react-magnifier";
import { Link } from "react-router-dom";
import RemoveItem from "./actions/RemoveItem";
import CheckOut from "./CheckOut";

const ItemsOnCart = (items) => {
  const dispatch = useDispatch();
  function removeItem(id) {
    dispatch(RemoveItem(id));
  }
  return items.map((myList) => {
    return (
      <div
        className="card"
        style={{ marginLeft: "9%", minWidth: "20%", maxWidth: "100%" }}
      >
        <div class="image">
          <Magnifier src={myList.photo} style={{ height: "300px" }} />
        </div>
        <div class="content">
          <a class="header">{myList.name}</a>
          <div class="description">
            <p>{myList.detail}</p>
            <br />
          </div>
          <div class="extra">
            <div>
              <h6>Added Quantity: {myList.addedQuantity}</h6>
            </div>
            <div
              class="ui primary button"
              style={{ float: "right", backgroundColor: "#e25555" }}
              onClick={(e) => removeItem(myList.id)}
            >
              <i
                class="fas fa-trash-alt"
                style={{ color: "white", fontSize: "1.1em" }}
              ></i>
            </div>
          </div>
          <h6>
            Total Price :{" "}
            <span style={{ border: "1px solid black", padding: "2px" }}>
              Rs. {myList.addedQuantity * myList.price}
            </span>
            <small class="text-muted">&emsp;(Rs. {myList.price} each)</small>
          </h6>
        </div>
      </div>
    );
  });
};

const MyCart = () => {
  const items = useSelector((state) => state.CartReducer);
  if (items.length == 0) {
    return (
      <div
        className="emptyCart"
        style={{
          alignItems: "center",
          textAlign: "center",
          marginTop: "5%",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Your cart is Empty.
        <br />
        <br />
        <Link to="/products">
          <button
            style={{
              padding: "5px",
              backgroundColor: "#e87676",
              color: "black",
              border: "none",
              fontWeight: "bolder",
            }}
          >
            <i class="fas fa-arrow-circle-left"></i>&nbsp;Start Shopping
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <br />
        <div
          style={{
            position: "relative",
            textAlign: "right",
            float: "left",
            marginLeft: "110px",
            fontSize: "20px",
            color: "white",
            width: "fit-content",
            alignItems: "right",
            display: "flexbox",
          }}
        >
          <Link to="/products">
            <button
              style={{
                padding: "5px",
                backgroundColor: "#e87676",
                color: "black",
                border: "none",
                fontWeight: "bolder",
              }}
            >
              <i class="fas fa-arrow-circle-left"></i>&nbsp;Continue Shopping
            </button>
          </Link>
        </div>
        <br />
        <br />
        <br />
        <div className="ui cards">{ItemsOnCart(items)}</div>
        <div>
          <CheckOut />
        </div>
      </div>
    );
  }
};

export default MyCart;
