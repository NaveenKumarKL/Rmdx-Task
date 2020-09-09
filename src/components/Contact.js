import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 col-sm-12">
            <div className="">
              <h5>
                <i className="fa fa-minus mr-n1 serviceminus"></i>
                <i className="fa fa-minus pr-4 serviceminus"></i>
                <span className="servicesub">Reach out Now</span>
              </h5>
              <h3 className="text-white my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </h3>
              <p className="reachoutpcontent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-8 mx-auto py-5">
                  <div className="my-3 d-flex justify-content-center">
                <i
                  class="fa fa-phone phoneicon"
                  style={{ fontSize: "60px" }}
                ></i>
                </div>
                <p className="text-center text-white my-2">+900 658 756 2312</p>
                <div className="mt-4 d-flex justify-content-center">
                <a href="#" className="articlebutton">
                  Contact Us
                  <i
                    class="fa fa-long-arrow-right pl-3"
                    style={{ fontSize: "15px" }}
                  ></i>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
