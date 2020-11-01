'use strict'
import React, { Component } from 'react'
// import Title from './title'
// import Square from './square'
// import Button from './button'
// import LikeButton from './like-button'
// import SearchButton from './search-button'
// import Timer from './timer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }

  render () {
    return (
      <div>
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={() => {
              this.setState({ checked: !this.state.checked }, () => {
                this.setState({ showContent: this.state.checked })
              })
            }}
          /> Mostrar conteúdo
        </label>

        {this.state.showContent && <div> Olha eu aqui! </div>}
      </div>
    )
  }
}

export default App

// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       value: 'Textarea\nvalue'
//     }
//   }

//   render () {
//     return (
//       <form
//         onSubmit={(e) => {
//           e.preventDefault()
//           console.log('event', e)
//         }}
//         onChange={(e) => {
//           console.log('name', e.target.name)
//           console.log('value', e.target.value)
//         }}
//       >
//         <input type='name' name='name' />
//         <input type='email' name='email' />
//         <textarea name='textarea' value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} />
//         <button type='submit'>Enviar</button>
//       </form>
//     )
//   }
// }

// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       value: '2'
//     }
//   }

//   render () {
//     return (
//       <form>
//         <select multiple value={['1', '3']} onChange={(e) => { this.setState({ value: e.target.value }) }}>
//           <option value='1'>Opção 1</option>
//           <option value='2'>Opção 2</option>
//           <option value='3'>Opção 3</option>
//         </select>
//       </form>
//     )
//   }
// }

// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       value: 'Valor inical',
//       checked: false
//     }
//   }

//   render () {
//     return (
//       <div className='container'>
//         <form>
//           <input
//             type='text'
//             value={this.state.value}
//             onChange={(e) => {
//               console.log(e)
//               this.setState({
//                 value: e.target.value
//               })
//             }}
//           />
//           <label>
//             <input type='checkbox' checked={this.state.checked} onChange={(e) => { this.setState({ checked: !this.state.checked }) }} />
//             checkbox
//           </label>

//           <input type='radio' name='rd' value='1' defaultChecked /> Radio 1
//           <input type='radio' name='rd' value='2' defaultChecked={false} /> Radio 2
//         </form>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render () {
//     console.log('render')
//     return (
//       <div className='container'>
//         <Button handleClick={() => console.log('clicou')}>
//           Clique em mim
//         </Button>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor () {
//     console.log('constructor')
//     super()
//     this.state = {
//       time: 0,
//       showtimer: true
//     }
//   }

//   componentWillMount () {
//     console.log('componentWillMount')
//   }

//   componentDidMount () {
//     console.log('componentDidMount')
//   }

//   componentWillUnmount () {
//     console.log('componentWillUnmount')
//   }

//   render () {
//     console.log('render')
//     return (
//       <div className='container'>
//         <Timer time={this.state.time} />
//         <button onClick={() => { this.setState({ time: this.state.time + 10 }) }}>Change props</button>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor () {
//     console.log('constructor')
//     super()
//     this.state = {
//       time: 0,
//       showtimer: true
//     }
//   }

//   componentWillReceiveProps (nextProps) {
//     console.log('componentWillReceiveProps: ', this.props, nextProps)
//   }

//   componentWillMount () {
//     console.log('componentWillMount')
//   }

//   componentDidMount () {
//     console.log('componentDidMount')
//   }

//   componentWillUnmount () {
//     console.log('componentWillUnmount')
//   }

//   render () {
//     console.log('render')
//     return (
//       <div className='container'>
//         {this.state.showtimer && <Timer time={this.state.time} />}
//         <button onClick={() => { this.setState({ showtimer: !this.state.showtimer }) }}>Show / hide timer</button>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor () {
//     console.log('constructor')
//     super()
//     this.state = {
//       color: 'green'
//     }
//   }

//   componentWillMount () {
//     console.log('componentWillMount')
//   }

//   componentDidMount () {
//     console.log('componentDidMount')
//   }

//   componentWillUnmount () {
//     console.log('componentWillUnmount')
//   }

//   render () {
//     console.log('render')
//     return (
//       <div className='container'>
//         <Square color={this.state.color} />
//         {['red', 'green', 'blue'].map((color) => (
//           <Button key={color} handleClick={() => this.setState({ color })}>{color}</Button>
//         ))}
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       text: 'Fernando'
//     }
//   }

//   render () {
//     var self = this
//     return (
//       <div className='container' onClick={() => self.setState({ text: 'Outro texto' })}>
//         {this.state.text}
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render () {
//     return (
//       <div className='container'>
//         <LikeButton />
//         <SearchButton />
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render () {
//     return (
//       <div className='container'>
//         <Button>
//           <span>Texto</span>
//           outro texto
//         </Button>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render () {
//     return (
//       <div className='container' onClick={(e) => { alert('clicou') }}>
//         <Square />
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render () {
//     return (
//       <div className='container'>
//         <Title name='Fernando' lastname='Daciuk' /> {/* name='Fernando Daciuk' */}
//         {['blue', 'red', 'green'].map((square) => (
//           <Square key={square} color={square} />
//         ))}
//       </div>
//     )
//   }
// }

// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         <Title name='Fernando' lastname='Daciuk' /> {/* name='Fernando Daciuk' */}
//         <label htmlFor='input' data-label='Label'>Input</label>
//         <input type='text' id='input' aria-hidden='true' />
//       </div>
//     )
//   }
// })
// function sum (val1, val2){
//   return val1 + val2
// }
