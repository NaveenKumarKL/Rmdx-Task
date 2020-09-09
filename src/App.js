import React from "react";
// bootstraplink
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Header from "./components/Header";
import Banner from "./components/Banner";
import CompanyLogo from "./components/Companylogo";
import Service from "./components/service";
import Work from "./components/Work";
import Allservice from "./components/Allservice";
import Published from "./components/published";
import Articles from "./components/articles";
import Contact from "./components/Contact";
import Connectall from "./components/connect";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="banneroverall">
        <Banner />
      </div>
      <div>
        <CompanyLogo />
      </div>
      <div className="serviceoverll">
        <Service />
      </div>
      <div className="workoverall">
        <Work />
      </div>
      <div className="workoverall">
        <Allservice />
      </div>
      <div className="published">
        <Published/>
      </div>
      <div className="workoverall">
        <Articles/>
      </div>
      <div className="contact">
        <Contact/>
      </div>
      <div >
        <Connectall/>
      </div>
      <div >
        <Footer/>
      </div>
    </div>
  );
}

export default App;
