import React, { Component } from "react";

export default class Published extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
        <div className="border-top-2 col-md-8 col-sm-12">
          <h3>
            <i className="fa fa-minus mr-n1 serviceminus"></i>
            <i className="fa fa-minus pr-4 serviceminus"></i>
            <span className="servicesub">RECENTLY PUBLISHED</span>
          </h3>
          <h2 className="servicehead">Service we can help you with.</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, 
          </p>
        </div>
        </div>
      </div>
    );
  }
}
