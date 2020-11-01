import React from 'react'
import './gerenciador-tarefas.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ListarTarefas from './listar/listar-tarefas'
import CadastrarTarefa from './cadastrar/cadastrar-tarefa'
import AtualizarTarefa from './atualizar/atualizar-tarefa'


function GerenciadorTarefas() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path='/dashboard' component={Dashboard}></Route> */}
        <Route path='/atualizar/:id' component={AtualizarTarefa}></Route>
        <Route path='/cadastrar' component={CadastrarTarefa}></Route>
        <Route path='/' component={ListarTarefas}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default GerenciadorTarefas
