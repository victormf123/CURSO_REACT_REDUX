import React from 'react'
import MenuItem from './meniItem'
import MenuTree from './menuTree'

export default props => (
  <ul className="sidebar-menu">
      <MenuItem path='/' label='Dashboard' icon='dashboard' />
      <MenuTree label='Cadastro' icon='edit'>
         <MenuItem path='billingCycles' label='Ciclo de Pagamentos' icon='usd' />
      </MenuTree>
  </ul>
)