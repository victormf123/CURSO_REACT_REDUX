import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashboard'
//import Dashboard2 from '../dashboard2/dashboard2' // feito sem o redux
import BillingCicle from '../billingCycle/billingCycle'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path='billingCycles' component={BillingCicle} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
)