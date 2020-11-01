'use strict'

import React from 'react'

const Title = ({ name, lastname }) => (
  <h1>Olá {`${name} ${lastname}`}!</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Desconhecido'
}

export default Title
// const Title = (props) => (
//   <h1>Olá {props.name + ' ' + props.lastname}!</h1>
// )

// const Title = (props) => (
//   <h1>Olá {`${props.name} ${props.lastname}`}!</h1>
// )

// const Title = () => (
//     <h1>Olá Fernando!</h1>
// )

// const Title = () => <h1>Olá Fernando!</h1>

// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       lastname: 'Sem sobrenome'
//     }
//   },
//   render: function () {
//     return (
//       <h1>Olá {this.props.name + ' ' + this.props.lastname}!</h1>
//     )
//   }
// })
