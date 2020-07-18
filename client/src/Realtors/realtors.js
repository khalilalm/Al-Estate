import React, { Component } from "react";

import Pagination from "react-js-pagination";
import "./realtors.css";
import axios from 'axios';
class realtors extends Component {
   state = {
     pics: [],
     array: [1,2,3,4,5],
     page: 1
   }
     handlePageChange = (pageNum) =>{
      fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => res.json())
      .then((res) => this.setState( {
        pics: res[1].id[1]
      }))
      console.log(`active page is ${pageNum}`);
       this.setState({page: pageNum
     })
     }

  render() { 
      const picsApi = 
     fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((res) => res.json())
    .then((res) => this.setState( {
      pics: res.url
    }))
   
    const picItems = <img src={this.state.pics} className='img'></img >

    return (
      <div className="realtors-wrapper">
        <div className="realtors-content">
          <h1>Realtors</h1>

          <div>
            {picItems}
          </div>
          <Pagination 
          activePage={this.state.page}
          itemsCountPerPage={10}
          totalItemsCount={500}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default realtors;
