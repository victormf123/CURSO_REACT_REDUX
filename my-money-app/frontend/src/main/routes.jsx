import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
//import Dashboard2 from '../dashboard2/dashboard2' // feito sem o redux
import BillingCicle from '../billingCycle/billingCycle'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/billingCycles' component={BillingCicle} />
    <Redirect from='*' to='/' />
  </Router>
)