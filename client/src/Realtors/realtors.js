import React, { Component } from "react";
import "./realtors.css";
class realtors extends Component {

  render() { 
    

    return (
      <div className="realtors-wrapper"> 
      <h1 className="realtors-title">Realtors</h1>
        <div className="realtors-content">
         
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d47872.170767796284!2d-75.63564868636612!3d41.41728698303775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srealtors!5e0!3m2!1sen!2sus!4v1595098450986!5m2!1sen!2sus" allowfullscreen="" aria-hidden="false" tabindex="0">
            
          </iframe>
        </div>
      </div>
    );
  }
}

export default realtors;
