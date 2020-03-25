import React, { Component } from 'react';

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial
  };

  maisUm = () => {
    this.setState({ ...this.state, numero: this.state.numero + 1 });
  };

  render() {
    return (
      <div>
        <div>Número: {this.state.numero}</div>
        <button onClick={this.maisUm}>Inc</button>
        <button>Dec</button>
      </div>
    );
  }
}

//Solução 01 - Bind
// constructor(props){
//   super(this)
//   this.maisUm = this.maisUm.bind(this)
// }

//Solução 02 - Função Arrow (onClick)
//<button onClick={() => this.maisUm()}>Inc</button>

//Solução 03 - Função Arrow
// maisUm = () => {
//   this.props.numero++;
// };
