import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#inicio">
              CAM #8
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              {/* <li>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li> */}
              <li>
                <a href="#nosotros" className="page-scroll">
                  ACERCA DE NOSOTROS
                </a>
              </li>
              <li>
                <a href="#servicios" className="page-scroll">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Galeria
                </a>
              </li>
              {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li> */}
              <li>
                <a href="#categorias" className="page-scroll">
                  LSM
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contacto
                </a>
              </li>
              <li>
                <a  className="page-scroll">
                  Login
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      
    );
  }
}

export default Navigation;
