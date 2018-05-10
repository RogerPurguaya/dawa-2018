import React, {Component} from 'react'

import classes from './contador.css'

export default class Contador extends Component {
    state = {
        cont : this.props.valor
    }

    disminuirHandler = () => {
            this.setState({
                cont: this.state.cont - 1
            })
    } 
    
    resetHandler = () => {
        this.setState({
            cont: this.props.valor
        })
    }
    aumentarHandler = () => {
        this.setState({
            cont: this.state.cont + 1
        })
    }


    render(){
        let advertencia = (<p> Empezamos con un número mayor a 5 ! </p>)
        if (this.props.valor <= 5) { advertencia = null }
        return(
            <div className={classes.Contador}>
                <h1>Este es mi componente de Contador</h1>
                <p>Este contador empezará en { this.props.valor }</p>
                {advertencia}
                <p>Número Actual: { this.state.cont }</p>
                <button onClick={this.disminuirHandler}>Disminuir</button>
                <button onClick={this.resetHandler}>Resetear</button>
                <button onClick={this.aumentarHandler}>Aumentar</button>
            </div>
            )
    }
}