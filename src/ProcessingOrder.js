import React from "react";
import Spinner from "react-spinner-material";

export default class OrderSuccessful extends React.Component {
  render() {
    setTimeout(function () {
      window.location.href = "/success";
    }, 3000);
    return (
      <div>
        <div
          className="Spinner-div"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "70px",
          }}
        >
          <Spinner
            size={120}
            spinnerColor={"#333"}
            spinnerWidth={2}
            visible={true}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "70px",
          }}
        >
          <p
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
            }}
          >
            Please wait while we process your order.
          </p>
        </div>
      </div>
    );
  }
}
