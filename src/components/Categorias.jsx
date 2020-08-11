import React, { Component } from "react";


export class Categorias extends Component {
  render() {
    return (
      <div id="categorias" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>LENGUAJE DE SEÑAS MEXICANO</h2>
           
            <br/>
             <ul>
            <li>
            <a  type="button" class="btn btn-primary btn-lg btn-block">Abecedario</a> 
            </li>
            <br/>
            <li>
            <a type="button" class="btn btn-danger btn-lg btn-block">Aprende</a> 
            </li>
            


            </ul> 

          </div>
          
        </div>
      </div>
    );
  }
}

export default Categorias;
