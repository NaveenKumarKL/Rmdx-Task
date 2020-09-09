import React, { Component } from "react";

export default class Service extends Component {
  render() {
    return (
      <div className="container d-flex" id="service">
        <div className="row">
        <div className="col-md-4 serviceleft"></div>
        <div className="col-md-8 serviceright">
          <div className="border-top-2">
            <h3>
              <i className="fa fa-minus mr-n1 serviceminus"></i>
              <i className="fa fa-minus pr-4 serviceminus"></i>
              <span className="servicesub">OUR SERVICE</span>
            </h3>
            <h2 className="servicehead">Service we can help you with.</h2>
          </div>
          <div className="row mt-5 pt-3">
            <div className="col-sm-7">
              <div className="card bg-transparent">
                <div className="servicelistincard">
                  <ul className="servicelist">
                    <li className="text-white">Ut enim ad minim veniam</li>
                    <span className="servicesublist">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                    <li>Motor Design and Animation</li>
                    <li>Mobile app development</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <ul className="servicelist">
                <li>Ui/ux development</li>
                <li>Mobile app development</li>
                <li>Front End development</li>
                <li>Research and Discovery</li>
              </ul>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-12">
              <div className="p-3 mt-3 servicebutton">
                <a href="#" >Challenges are oppurtunities in disguies. <span className="text-white servicesm">Take the Challenges!</span>  <i class="fa fa-long-arrow-right pl-5" style={{fontSize:"18px"}}></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
