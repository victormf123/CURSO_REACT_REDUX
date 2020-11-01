import React from 'react'
import ReactDOM from 'react-dom'
import Ordenacao from './ordenacao'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Teste do componente de ordenação', () => {
  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Ordenacao 
        ordenarAsc={false}
        ordenarDesc={false} />, div
    )

    ReactDOM.unmountComponentAtNode(div)
  })

  it('deve exibir a ordenacao padrão', () => {
    const {getByTestId} = render(
      <Ordenacao ordenarAsc={false} ordenarDesc={false} />
    )
    expect(getByTestId('faSort')).not.toHaveClass('hidden')
    expect(getByTestId('faSortUp')).toHaveClass('hidden')
    expect(getByTestId('faSortDown')).toHaveClass('hidden')
  })

  it('deve exibir a ordenacao ascendente', () => {
    const {getByTestId} = render(
      <Ordenacao ordenarAsc={true} ordenarDesc={false} />
    )
    expect(getByTestId('faSort')).toHaveClass('hidden')
    expect(getByTestId('faSortUp')).not.toHaveClass('hidden')
    expect(getByTestId('faSortDown')).toHaveClass('hidden')
  })

  it('deve exibir a ordenacao descendente', () => {
    const {getByTestId} = render(
      <Ordenacao ordenarAsc={false} ordenarDesc={true} />
    )
    expect(getByTestId('faSort')).toHaveClass('hidden')
    expect(getByTestId('faSortUp')).toHaveClass('hidden')
    expect(getByTestId('faSortDown')).not.toHaveClass('hidden')
  })
})