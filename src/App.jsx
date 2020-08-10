import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
/* import Features from './components/features'; */
import Nosotros from './components/nosotros';
import Servicios from './components/servicios';
import Gallery from './components/gallery';
import Categorias from './components/Categorias';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
       {/*  <Features data={this.state.landingPageData.Features} /> */}
        <Nosotros data={this.state.landingPageData.Nosotros} />
        <Servicios data={this.state.landingPageData.Servicios} />
        <Gallery />
        
        <Categorias data={this.state.landingPageData.Categorias} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
