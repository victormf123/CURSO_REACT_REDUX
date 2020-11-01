import React from 'react';
import ReactDOM from 'react-dom'
import GerenciadorTarefas from './gerenciador-tarefas';

it('deve renderizar o projeto sem erros', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GerenciadorTarefas />, div)
  ReactDOM.unmountComponentAtNode(div)
});
