import React from "react";
import { Link } from "react-router-dom";

export default class OrderSuccessful extends React.Component {
  render() {
    return (
      <div>
        <p
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "70px",
            fontSize: "1.5em",
            fontWeight: "bold",
          }}
        >
          Your Order is Successful. Thank you for choosing HempIN.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/products">
            <button
              style={{
                padding: "10px",
                backgroundColor: "#e87676",
                color: "black",
                border: "none",
                fontWeight: "bolder",
                fontSize: "1.3em",
              }}
            >
              <i class="fas fa-arrow-circle-left"></i>&nbsp;Start Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
