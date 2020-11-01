import React from 'react'
import ReactDOM from 'react-dom'
import AtualizarTarefa from './atualizar-tarefa'
import Tarefa from '../models/tarefa.model'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router, Route, MemoryRouter } from 'react-router-dom'

describe('Teste do componente de atualização de tarefa', () => {

  const tarefaId = 1

  beforeEach(() => {
    localStorage['tarefas'] = JSON.stringify([
      new Tarefa(tarefaId, 'Nova tarefa', false)
    ])
  })

  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter initialEntries={[`/atualizar/${tarefaId}`]}>
        <Route path='/atualizar/:id'>
          <AtualizarTarefa id={tarefaId} />
        </Route>
      </MemoryRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('deve exibir modal de sucesso ao atualizar uma tarefa', () => {
    const {getByTestId} = render(
      <MemoryRouter initialEntries={[`/atualizar/${tarefaId}`]}>
        <Route path='/atualizar/:id'>
          <AtualizarTarefa id={tarefaId} />
        </Route>
      </MemoryRouter>
    )
    fireEvent.click(getByTestId('btn-atualizar'))
    expect(getByTestId('modal')).toHaveTextContent('Sucesso')
  })

  it('deve atualizar uma tarefa', () => {
    const nomeTarefaAtualizada = 'Tarefa atualizada'
    const {getByTestId} = render(
      <MemoryRouter initialEntries={[`/atualizar/${tarefaId}`]}>
        <Route path='/atualizar/:id'>
          <AtualizarTarefa id={tarefaId} />
        </Route>
      </MemoryRouter>
    )
    fireEvent.change(getByTestId('txt-tarefa'), {target: {value: nomeTarefaAtualizada}})
    fireEvent.click(getByTestId('btn-atualizar'))
    const tarefasDb = JSON.parse(localStorage['tarefas'])
    expect(tarefasDb[0].nome).toBe(nomeTarefaAtualizada)
  })
})