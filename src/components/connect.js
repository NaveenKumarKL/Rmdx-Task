import React, { Component } from "react";

export default class Connectall extends Component {
  render() {
    return (
      <div className="container" id="contact">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="d-flex">
              <div className="connectbrand">
                <a className="navbar-brand" href="#">
                  <img
                    src={require("../image/logo.png")}
                    className="d-inline-block align-top  brandicon"
                    alt="logo"
                  ></img>{" "}
                </a>
              </div>
              <div className="text-white my-auto nav-link connectbrand">
                <div className="brandnameheading">
                  <h4>AGENCIO</h4>
                </div>
                <div className="brandnamesubheading">
                  <span>JOOMLA TEMPLATE</span>
                </div>
              </div>
            </div>
            <div className="my-5 py-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-6">
                <div className="">
                  <h5>
                    <i className="fa fa-minus mr-n1 serviceminus"></i>
                    <i className="fa fa-minus pr-4 serviceminus"></i>
                    <span className="reachoutpcontent">Head Office</span>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, elit, sed do labore et dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className=" pb-5">
                  <h5>
                    <i className="fa fa-minus mr-n1 serviceminus"></i>
                    <i className="fa fa-minus pr-4 serviceminus"></i>
                    <span className="reachoutpcontent">Studio Office</span>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, elit, sed do labore et dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
              <div className="row mt-md-5 pb-sm-5 pt-5">
                  <div className="col-md-4 col-sm-4">
                      <h5 className="text-md-center pl-5">Resource</h5>
                      <ul className="connectlist">
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                      </ul>
                  </div>
                  <div className=" col-sm-4">
                  <h5 className="text-md-center pl-5">Company</h5>
                  <ul className="connectlist">
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                      </ul>
                  </div>
                  <div className="col-md-4 col-sm-4">
                  <h5 className="text-md-center pl-5">Social</h5>
                  <ul className="connectlist">
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                      </ul>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
