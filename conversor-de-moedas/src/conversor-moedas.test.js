import React from 'react';
import ReactDOM from 'react-dom'
import ConversorMoedas  from './conversor-moedas.js';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios';
describe('Teste do componente de conversão de moedas', () => {
  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ConversorMoedas />, div)
    ReactDOM.unmountComponentAtNode(div)
  });

  it('deve simular um conversão de moedas', async () => {
    const { findByTestId, getByTestId } = render(<ConversorMoedas />);
    axiosMock.get.mockResolvedValueOnce({
      data: {success: true, rates: { BRL: 4.564292, USD: 1.101049 }}
    });
    fireEvent.click(getByTestId('btn-converter'))
    const modal = await findByTestId('modal')
    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(modal).toHaveTextContent('1 BRL = 0.19 USD')
  })

})
