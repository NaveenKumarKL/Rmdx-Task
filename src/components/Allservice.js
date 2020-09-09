import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class Allservice extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12 ">
            <div class="card p-2 allservicecard mx-auto">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                controls
                width="100%"
                height="250px"
              />
              <div class="card-body">
                <p class="card-text py-4">
                  "Some quick example text to build on the card title and make
                  up the bulk of the card's content quick example text to build
                  on the card title and make up".
                </p>
                <h5 class="card-title">Naveen Kumar </h5>
                <p className="card-text">Fullstackdeveloper at RMgx</p>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <div className="allservicerighttop">
              <div className="p-5">
                <h3>
                  <i className="fa fa-minus mr-n1 serviceminus"></i>
                  <i className="fa fa-minus pr-4 serviceminus"></i>
                  <span className="servicesub">All Service</span>
                </h3>
                <h2 className="servicehead py-2">
                  Making products meaningfull.
                </h2>
                <p className="pt-1">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident..
                </p>
              </div>
            </div>
            <div className="allservicerightbottom row mt-n5 ml-2">
              <div className="col-sm-6">
                <div class="card border-0">
                  <img src={require('../image/icon2.png')}  alt="icon" width="50px" height="50px" />
            
                    <h6>Card title</h6>
                    <p >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>                   
             
                </div>
              </div>
              <div className="col-sm-6">
              <div class="card border-0">
              <img src={require('../image/icon1.png')} className="p-1"  alt="icon" width="50px" height="50px" />
          
                    <h6>Card title</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>                   
            
                </div>
              </div>
              <div className="col-sm-6">
              <div class="card border-0">
              <img src={require('../image/icon3.png')}  alt="icon" width="50px" height="50px" />
               
                    <h6>Card title</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>                   
               
                </div>
              </div>
              <div className="col-sm-6">
              <div class="card border-0">
              <img src={require('../image/icon4.png')}  alt="icon" width="50px" height="50px" />
                
                    <h6>Card title</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>                   
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
