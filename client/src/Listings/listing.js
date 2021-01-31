import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./listing.css";
const Home = props => (
  <tr>
    <td>{props.home.username}</td>
    <td>{props.home.description}</td>
    <td>{props.home.pricing}</td>
    <td>{props.home.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.home._id}>edit</Link> | <a href="#" onClick={() => { props.deleteHome(props.home._id) }}>delete</a>
    </td>
  </tr>
)

export default class listing extends Component {
  constructor(props) {
    super(props);

    this.deleteHome = this.deleteHome.bind(this)
    this.state = {homes: []};
  }

  componentDidMount() {
    axios.get('/homes')
      .then(response => {
        this.setState({ homes: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteHome(id) {
    axios.delete('/homes/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      homes: this.state.homes.filter(el => el._id !== id)
    })
  }

  homeList() {
    return this.state.homes.map(currenthome=> {
      return <Home home={currenthome} deleteHome={this.deleteHome} key={currenthome._id}/>;
    })
  }

  render() {
    return (
      <div className="listing-wrapper">
        <h3 style={{"text-align":"center"}}>Logged Homes</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Pricing</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.homeList() }
          </tbody>
        </table>
      </div>
    )
  }
}