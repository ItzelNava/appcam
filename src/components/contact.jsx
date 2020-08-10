import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Contacto</h2>
                  <p>
                    Contacto del Centro de Atencion Multiple Num.8
                  </p>
                </div>
             
              
            <div className="col-md-7  contact-info">
              <div className="contact-item">
              
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Direccion
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-key"></i> Clave
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-user"></i> Responsable
                  </span>{" "}
                  {this.props.data ? this.props.data.responsable : "loading"}
                </p>
              </div>
            </div>
            
          </div>
        </div>
        </div>
            </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; Centro De Atencion Multiple Num #8. 
              
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
