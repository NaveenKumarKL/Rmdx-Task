import React, { Component } from "react";

export default class Work extends Component {
  render() {
    return (
      <div className="container" id="work">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-12 worksleft">
            <div className="border-top-2">
              <h3>
                <i className="fa fa-minus mr-n1 serviceminus"></i>
                <i className="fa fa-minus pr-4 serviceminus"></i>
                <span className="servicesub">OUR WORKS</span>
              </h3>
              <h2 className="servicehead">See our recent works</h2>
              <p className="pt-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="buttonworkoutside">
                  <a href="#" className="workbutton">See all Projects <i class="fa fa-long-arrow-right pl-5" style={{fontSize:"18px"}}></i></a>
              </div>
            </div>
          </div>
          <div className="col workbluediv"></div>
          <div className="col workcenterdiv"></div>
          <div className="col workbluediv"></div>
        </div>
      </div>
    );
  }
}
