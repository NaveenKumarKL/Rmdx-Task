import React,{Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile,faSearch } from "@fortawesome/free-solid-svg-icons";


// library.add(faUser);

// header Component contains navbar
export default class Header extends Component{
    render() {
        return (
                <div className="header">
                  <nav className="navbar navbar-expand-lg">
                    {/*Brand Icon*/}
                      <div className="nav m-n2 ml-n3 ">
                        <a className="navbar-brand" href="#">
                          <img src={require('../image/logo.png')} className="d-inline-block align-top  brandicon" alt="logo">
                        </img> </a>
                      <div className="text-white my-auto nav-link">
                        <div className="brandnameheading">
                          <h4>AGENCIO</h4>
                        </div>
                          <div className="brandnamesubheading">
                            <span>JOOMLA TEMPLATE</span>
                          </div>
                        </div>
                      </div>

                    {/* toggler */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon text-white"><i class="fa fa-bars" style={{fontSize:"24px"}}></i></span>
                        </button>

                        <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto pl-3 navlist">
                            <li className="nav-item ">
                              <a className="nav-link" href="#company">About</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#service">Service</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#work">Work</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#article">Case Studies</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#contact">Contacts</a>
                            </li>
                          </ul>
                          <form className="form-inline my-2 my-lg-0">
                           <FontAwesomeIcon icon={faMobile} className="naviconcolormobile" /><span className="nav_mobileNo">+91 234234434</span>
                            <input className="form-control  mr-sm-2 w-40" type="search" placeholder="Contacts us" aria-label="Search" />
                            <button className="btn  my-2 my-sm-0" type="submit"><FontAwesomeIcon icon={faSearch}  className="naviconcolor"/></button>
                          </form>
                        </div>
                      </nav>
                </div>
        );
    }
};
