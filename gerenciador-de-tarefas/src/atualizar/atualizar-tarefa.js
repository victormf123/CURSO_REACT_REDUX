import React, {useState, useEffect} from 'react';
import propTypes from 'prop-types'
import {Button, Form, Jumbotron, Modal} from 'react-bootstrap'
import { Link, useHistory, useParams } from 'react-router-dom'

function AtualizarTarefa(props) {

  const [exibirModal, setExibirModal] = useState(false)
  const [formValidado, setFormValidado] = useState(false)
  const [tarefa, setTarefa] = useState('')
  const [carregarTarefa, setCarregarTarefa] = useState(true)
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if(carregarTarefa) {
      const tarefasDb = localStorage['tarefas']
      const tarefas = tarefasDb ? JSON.parse(tarefasDb) : []
      const tarefa = tarefas.filter(
        t => t.id === parseInt(id)
      )[0]
      setTarefa(tarefa.nome)
      setCarregarTarefa(false)
    }
  }, [carregarTarefa, id])

  function handleFecharModal(){
    setExibirModal(false)
    history.push('/')
  }

  function atualizar(event){
    event.preventDefault()
    setFormValidado(true)
    if(event.currentTarget.checkValidity() === true){
      // obtém as tarefas
      const tarefasDb = localStorage['tarefas']
      let tarefas = tarefasDb ? JSON.parse(tarefasDb) : []
      //persistir a tarefa atualizada 
      tarefas = tarefas.map(tarefaObj => {
        if(tarefaObj.id === parseInt(props.id)){
          tarefaObj.nome = tarefa
        }
        return tarefaObj
      })
      localStorage['tarefas'] = JSON.stringify(tarefas)
      setExibirModal(true)
    }
  }

  function handleTxtTarefa(event){
    setTarefa(event.target.value)
  }

  return (
    <div>
      <h3 className="text-center">Atualizar</h3>
      <Jumbotron>
        <Form noValidate onSubmit={atualizar} validated={formValidado}>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Digite a tarefa" 
              minLength="5" 
              maxLength="100" 
              value={tarefa}
              onChange={handleTxtTarefa}
              required 
              data-testid="txt-tarefa" />
            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center">
            <Button variant="success" type="submit" data-testid="btn-atualizar">
              Atualizar
            </Button>
            &nbsp;
            <Link to="/" className="btn btn-light">
              Voltar
            </Link>
          </Form.Group>
        </Form>
        <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
          <Modal.Header closeButton>
            <Modal.Title>Sucesso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tarefa atualizada com sucesso!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleFecharModal}>
              Continuar
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
  )
}

AtualizarTarefa.protoType = {
  id: propTypes.number.isRequired
}

export default AtualizarTarefa