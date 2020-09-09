import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="container bannerlist">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="card ml-5 bannercard">
              <div className="bannercard">
                <div className="card-body">
                  <h1 className="card-title">
                    Bussiness solutions for ambitious,fast growing brands.
                  </h1>
                  <p className="card-text cardbodyptag">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <a href="#" className="bannerbutton">
                    Start a Project 
                    <i
                      class="fa fa-long-arrow-right pl-5"
                      style={{ fontSize: "18px" }}
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
