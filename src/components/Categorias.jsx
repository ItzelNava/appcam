import React, { Component } from "react";


export class Categorias extends Component {
  render() {
    return (
      <div id="categorias" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>CATEGORIAS</h2>
            <p>
              Lista de categorias para aprender el Lenguaje de señas Mexicanas.
            </p>
            <br/>
             <ul>
            <li>
            <a type="button" class="btn btn-primary btn-lg btn-block">Abecedario</a> 
            </li>
            <br/>
            <li>
            <a type="button" class="btn btn-danger btn-lg btn-block">Animales</a> 
            </li>
            <br/>
            <li>
            <a type="button" class="btn btn-success btn-lg btn-block">Casa</a> 
            </li>
            <br/>
            <li>
            <a type="button" class="btn btn-info btn-lg btn-block">Colores</a> 
            </li>
            <br/>
            <li>
            <a type="button" class="btn btn-warning btn-lg btn-block">Dias De La Semana</a> 
            </li>
            <br/>
            <li>
            <a type="button" class="btn btn-primary btn-lg btn-block">Escuela</a> 
            </li>
            <br/>
            <li>
            <a type="button" class="btn btn-danger btn-lg btn-block">Familia</a> 
            </li>
            <br/>
            <li>
            <a type="button" class="btn btn-success btn-lg btn-block">Frutas</a> 
            </li>
            <br/>
            <li>
            <a type="button" class="btn btn-info btn-lg btn-block">Juguetes</a> 
            </li>
            <br/>
            <br/>
            <li>
            <a type="button" class="btn btn-warning btn-lg btn-block">Meses</a> 
            </li>
            <br/>
            <li>
            <a type="button" class="btn btn-primary btn-lg btn-block">Numeros</a> 
            </li>


            </ul> 

          </div>
          
        </div>
      </div>
    );
  }
}

export default Categorias;
