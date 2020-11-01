import React from 'react'
import ReactDOM from 'react-dom'
import ItensListaTarefas from './itens-lista-tarefas'
import Tarefa from '../models/tarefa.model'
import {render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router, Route } from 'react-router-dom'

describe('Teste do componente que exibe um item listagem de tarefas', () => {
  const nomeTarefa = 'Tarefa'
  const tarefa = new Tarefa(1, nomeTarefa, false)
  const tarefaConcluida = new Tarefa(2, nomeTarefa, true)
  
  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ItensListaTarefas
      tarefas={[]}
      recarregarTarefas={() => false }/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('deve exibir a tarefa', () => {
    const {getByTestId} = render(
      <Router>
        <table>
          <tbody>
            <ItensListaTarefas 
              tarefas={[tarefa]}
              recarregarTarefas={() => false } />
          </tbody>
        </table>
      </Router>
    )
    expect(getByTestId('tarefa')).toHaveTextContent(nomeTarefa)
  })

  it('deve exibir uma tarefa concluida', () => {
    const {getByTestId} = render(
      <Router>
        <table>
          <tbody>
            <ItensListaTarefas 
              tarefas={[tarefaConcluida]}
              recarregarTarefas={() => false } />
          </tbody>
        </table>
      </Router>
    )
    expect(getByTestId('nome-tarefa')).toHaveStyle('text-decoration: line-through')
  })
})