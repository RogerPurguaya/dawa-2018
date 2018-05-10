import React, { Component } from 'react';
import Contador from "./components/contador/contador.jsx";
import Calculadora from './components/calculadora/calculadora.jsx'

class App extends Component {
  render() {
    let body = (
      <div>
        <Contador valor={7}/>
        <hr />
        <Contador valor={0} />
        <hr />
        <Calculadora /><Calculadora />
      </div>
    )
    return (body);
  }
}

export default App;
