import React,{Component} from 'react';


export default class CompanyLogo extends Component{
    render() {
        return (
                <div className="container" id="company">
                  <div className="row d-flex justify-content-md-center">
                      <div className="col-12 col-sm-6 col-md-2">
                        <img src={require('../image/companylogo1.png')} alt="companyLogo"></img>
                      </div>
                      <div className="col-12 col-sm-6 col-md-2">
                        <img src={require('../image/companylogo3.png')} alt="companyLogo"></img>
                      </div>
                      <div className="col-12 col-sm-6 col-md-2">
                        <img src={require('../image/companylogo2.png')} alt="companyLogo"></img>
                      </div>
                      <div className="col-12 col-sm-6 col-md-2">
                        <img src={require('../image/companylogo4.png')} alt="companyLogo"></img>
                      </div>
                      <div className="col-12 col-sm-6 col-md-2">
                        <img src={require('../image/companylogo5.png')} alt="companyLogo"></img>
                      </div>
                  </div>
                     
                </div>
        );
    }
};
