import React, { Component } from "react";
import "./Home.css";
import axios from "axios";

import notebook from "../images/spiralNotebook.png";

class home extends Component {
  state = {
    username: "",
    description: "",
    pricing: 0,
    date: new Date(),
    users: [],
  };

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onChangePricing = (e) => {
    this.setState({
      pricing: e.target.value,
    });
  };

  onChangeDate = (date) => {
    this.setState({
      date: date,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const user = { username: this.state.username };
    axios
      .post("http://localhost:5001/users/add", user)
      .then((res) => console.log(res.data));
    this.setState({ username: "" });

    const home = {
      username: this.state.username,
      description: this.state.description,
      pricing: this.state.pricing,
      date: this.state.date,
    };

    console.log(home);

    axios
      .post("http://localhost:5001/homes/add", home)
      .then((res) => console.log(res.data));
    this.setState({ description: "", pricing: 0, date: new Date() });

    
  };

  render() {
    const img = (
      <div>
        <img
          src="https://placeimg.com/150/150/any"
          className="listing"
          alt="home-img"
        ></img>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
    );

    return (
      <div className="home-wrapper">
        <div className="hero-wrapper"></div>
        <div className="home-content">
          <h1 style={{ color: "black", textAlign: "center" }}>
            Inquired Listing
          </h1>
          <div className="listing-items">
            <form onSubmit={this.onSubmit}>
              <label>Username: </label>
              <input
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
              ></input>
              <br />
              <label>House Description: </label>
              <input
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                placeholder="Ex. House on 345 Water Street"
              ></input>
              <br />
              <label>House Pricing: </label>
              <input
                className="form-control"
                value={this.state.pricing}
                onChange={this.onChangePricing}
              ></input>
              <br />
              <label>When you plan on looking at Home: </label>
              <input
                className="form-control"
                value={this.state.date}
                onChange={this.onChangeDate}
              ></input>
              <br />
              <button
                className=".btn-flat"
                variant="primary"
                style={{ width: "100px" }}
              >
                Submit
              </button>
              <img src={notebook} className="book-img" alt="notebook-img"></img>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default home;
