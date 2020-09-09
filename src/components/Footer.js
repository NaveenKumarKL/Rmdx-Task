import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between footerall">
        <div className="p-2">
          <p>@2019 onepage</p>
        </div>
        <div className="d-flex justify-content-between">
            <a href="#">Terms and Conditions</a>
            <a href="#" className="px-2">Policy</a>
            <a href="#">Contribute</a>
        </div>
      </div>
    );
  }
}
