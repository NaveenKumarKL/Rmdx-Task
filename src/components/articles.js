import React, { Component } from "react";

export default class Articles extends Component {
  render() {
    return (
      <div className="container pt-1" id="article">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="d-flex flex-row">
              <div className="articleleft">
                <h6>
                  <i className="fa fa-minus mr-n1 serviceminus"></i>
                  <i className="fa fa-minus pr-4 serviceminus"></i>
                  <span className="article">21 May 2019</span>
                </h6>
              </div>
              <div className="pl-2 articlehuman">
                <h6>human</h6>
              </div>
            </div>
            <div className>
              <h4>How Wireless Technology Changing Business</h4>
            </div>
            <div className="articleblueblock"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>

            <a href="#">
              Read article
              <i
                class="fa fa-long-arrow-right pl-3"
                style={{ fontSize: "15px" }}
              ></i>
            </a>
          </div>
          <div className="col-sm-12 col-md-6">
            <div>
              <div className="d-flex flex-row">
                <div className="articleleft">
                  <h6>
                    <i className="fa fa-minus mr-n1 serviceminus"></i>
                    <i className="fa fa-minus pr-4 serviceminus"></i>
                    <span className="article">21 May 2019</span>
                  </h6>
                </div>
                <div className="pl-2 articlehuman">
                  <h6>human</h6>
                </div>
              </div>
              <div className>
                <h4>How Wireless Technology Changing Business</h4>
              </div>
              <div className="row p-3">
                <div className="articlebluerightblock col-4"></div>
                <div className="col">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>

                  <a href="#">
                    Read article
                    <i
                      class="fa fa-long-arrow-right pl-3"
                      style={{ fontSize: "15px" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="d-flex flex-row">
                <div className="articleleft">
                  <h6>
                    <i className="fa fa-minus mr-n1 serviceminus"></i>
                    <i className="fa fa-minus pr-4 serviceminus"></i>
                    <span className="article">21 May 2019</span>
                  </h6>
                </div>
                <div className="pl-2 articlehuman">
                  <h6>human</h6>
                </div>
              </div>
              <div className>
                <h4>How Wireless Technology Changing Business</h4>
              </div>
              <div className="row p-3">
                <div className="articlebluerightblock col-4"></div>
                <div className="col">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>

                  <a href="#">
                    Read article
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
        <div className="row mt-2">
          <div className="col-12 d-flex justify-content-end">
            <a href="#" className="articlebutton">
              More on the blog
              <i
                class="fa fa-long-arrow-right pl-3"
                style={{ fontSize: "15px" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
