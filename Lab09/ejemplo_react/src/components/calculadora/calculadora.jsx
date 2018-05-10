import React, { Component } from "react";
import classes from "./calculadora.css"

export default class Calculadora extends Component{
    
    bot = [
        {c1:'7',c2:'8',c3:'9',c4:'/'},
        {c1:'4',c2:'5',c3:'6',c4:'*'},
        {c1:'1',c2:'2',c3:'3',c4:'-'},
        {c1:'.',c2:'0',c3:'=',c4:'+'}
        ]

    constructor (props){
        super(props)
        this.state = {
            txtSalida: '',
            num1:'',
            operador:''
        }
    }

    procesar (button){
        let signos = ['+','-','*','/']
        let tmp = this.state.txtSalida
        if (signos.includes(button)) {
            this.setState({ operador: button ,txtSalida: '', num1: tmp})
        }else if(button === '='){
            let n1 = parseFloat(this.state.num1)
            let n2 = parseFloat(this.state.txtSalida)
            let res = 0
            switch (this.state.operador) {
                case '+':
                    res = n1 + n2
                    break;
                case '-':
                    res = n1 - n2
                break;
                case '*':
                    res = n1 * n2
                    break;
                case '/':
                    res = n1 / n2
                break;
                default:
                    this.setState({ txtSalida: 'Error' })
                    break;
            }
            this.setState({ txtSalida: res.toString()})
            return 
        }
        else{ 
             tmp = tmp.concat(button)
             this.setState({ txtSalida: tmp})
        }
    }

    limpiar = () => {
        this.setState({
            txtSalida: ''
        })
    }

    setColor = (pos) => {
        let color = 'btn btn-primary'
        let signos = ['+','-','*','/']
        if (signos.indexOf(pos) > -1) {color = 'btn btn-success'}
        if (pos === '=') {color = 'btn btn-danger'}
        console.log(color)
        return color
    }

  render(){
    return(
    <div className={classes.container}>
    <table>
        <tbody>
        <tr>
            <td colSpan="4"><input type="text" value={this.state.txtSalida}/></td>
        </tr>   
        { this.bot.map((it) => {
            let p1 = it.c1, p2 = it.c2, p3 = it.c3, p4 = it.c4, name="btn btn-block btn-";
            return (<tr key={p1}>
           <td><input type="button" className={name + "success"} value={p1} onClick={() => this.procesar(p1)}/></td>
           <td><input type="button" className={name + "success"} value={p2} onClick={() => this.procesar(p2)}/></td>
           <td><input type="button" className={name + "success"} value={p3} onClick={() => this.procesar(p3)}/></td>
           <td><input type="button" className={name + "warning"} value={p4} onClick={() => this.procesar(p4)}/></td>
         </tr>)
        }) }
          <tr>
            <td colSpan="4"><input type="button" className="btn btn-block btn-danger" value="LIMPIAR" onClick={this.limpiar}/></td>
          </tr>
         </tbody> 
        </table>
    </div>
    ) 
  }
}