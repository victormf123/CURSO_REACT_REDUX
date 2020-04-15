import './node_modules/modules/bootstrap/dist/css/bootstrap.min.css'
import './node_modules/modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import Routes from './routes'
import Menu from '../template/menu'

export default props => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
)