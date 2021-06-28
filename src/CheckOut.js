//ModalComponent.js
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      address: "",
      phoneno: "",
      email: "",
    };

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeAddress(event) {
    this.setState({ address: event.target.value });
  }
  handleChangePhone(event) {
    this.setState({ phone: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div style={{ marginBottom: "50px" }}>
          <Button
            color="success"
            onClick={this.toggle}
            style={{
              padding: "5px 10px 5px 10px",
              fontSize: "1.2em",
              fontWeight: "bold",
            }}
          >
            Checkout
          </Button>
        </div>
        <Modal isOpen={this.state.modal}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>Enter Your Details</ModalHeader>
            <ModalBody>
              <div className="row">
                <div className="col-md">
                  <label>Name:</label>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChangeName}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md">
                  <label>Address:</label>
                  <input
                    type="text"
                    value={this.state.team}
                    onChange={this.handleChangeAddress}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md">
                  <label>Phone:</label>
                  <input
                    type="tel"
                    value={this.country}
                    onChange={this.handleChangePhone}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={this.country}
                    onChange={this.handleChangeEmail}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md">
                  <label>Payment Type:</label>&emsp;
                  <input
                    type="checkbox"
                    id="pod"
                    name="pod"
                    value="pod"
                    checked="checked"
                  />
                  &nbsp;
                  <label for="pod">Pay On Delivery</label>
                  <br></br>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <input
                type="submit"
                value="Place Order"
                color="primary"
                className="btn btn-primary"
                onClick={() => (window.location.href = "/processing-order")}
              />
              <Button color="danger" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}
