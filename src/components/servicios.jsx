import React, { Component } from "react";

export class Servicios extends Component {
  render() {
    return (
      <div id="servicios" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Discapacidades Atendidas Por El CAM</h2>
            <p>
              A continuacion se presenta una lisa de discapacidades que se atienden
              en el Centro de Atencion Multiple.
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="servicio-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Servicios;
