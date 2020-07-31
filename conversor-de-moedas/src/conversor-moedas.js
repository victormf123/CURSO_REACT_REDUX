import React, {useState} from 'react';
import './conversor-moedas.css';
import {Jumbotron,  Button, Form, Col, Spinner, Alert, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import ListarMoedas from './listar-moedas'
import axios from 'axios'

function ConversorMoedas() {

  const FIXER_URL = 'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3'

  const [valor, setValor] = useState('')
  const [moedaDe, setMoedaDe] = useState('BRL')
  const [moedaPara, setMoedaPara] = useState('USD')
  const [exibirSpinner, setExibirSpinner] = useState(false)
  const [formValidado, setFormValidado] = useState(false)
  const [exibirModal, setExibirModal] = useState(false)
  const [resultadoConversao, setResultadoConversao] = useState('')
  const [exibirMsgErro, setExibirMsgErro] = useState(false)


  function handleMoedaDe(event) {
    setMoedaDe(event.target.value)
  }
  
  function handleMoedaPara(event) {
    setMoedaPara(event.target.value)
  }

  function handleValor(event) {
    setValor(event.target.value.replace(/\D/g, ''))
  }

  function handleFecharModal(event) {
    setValor('')
    setMoedaDe('BRL')
    setMoedaPara('USD')
    setFormValidado(false)
    setExibirModal(false)
  }

  function converter(event){
    event.preventDefault()
    setFormValidado(true)
    if(event.currentTarget.checkValidity() === true){
      setExibirSpinner(true)
      axios.get(FIXER_URL)
        .then( res => {
          const cotacao = obterCotacao(res.data)
          if(cotacao){
            setResultadoConversao(`${valor} ${moedaDe} = ${cotacao} ${moedaPara}`)
            setExibirModal(true)
            setExibirSpinner(false)
            setExibirMsgErro(false)
          }else{
            exibirErro()
          }
        }).catch(err => exibirErro())
    }
  }

  function obterCotacao(dadosCotacao){
    if(!dadosCotacao || dadosCotacao.success !== true){
      return false
    }
    const cotacaoDe = dadosCotacao.rates[moedaDe]
    const cotacaoPara = dadosCotacao.rates[moedaPara]
    const cotacao = (1/cotacaoDe * cotacaoPara) * valor
    return cotacao.toFixed(2)
  }

  function exibirErro(){
    setExibirMsgErro(true)
    setExibirSpinner(false)
  }

  return (
    <div>
      <h1>Conversor de Moedas</h1>
      <Alert variant="danger" show={exibirMsgErro}>
        Erro obtendo dados de conversão, tente novamente.
      </Alert>
      <Jumbotron>
        <Form onSubmit={converter} noValidate validated={formValidado}>
          <Form.Row>
            <Col sm="3">
              <Form.Control 
                placeholder="0"
                onChange={handleValor} 
                value={valor}
                required />
            </Col>
            <Col sm="3">
              <Form.Control as="select" value={moedaDe} onChange={handleMoedaDe}>
                <ListarMoedas />
              </Form.Control>
            </Col>
            <Col sm="1" className="text-center" style={{paddingTop: '5px'}}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>
            <Col sm="3">
              <Form.Control as="select" value={moedaPara} onChange={handleMoedaPara}>
                <ListarMoedas />
              </Form.Control>
            </Col>
            <Col sm="2">
              <Button variant="success" type="submit" data-testid="btn-converter">
                <span className={exibirSpinner ? null : 'hidden'}>
                  <Spinner animation="border" size="sm" />
                </span>
                <span className={exibirSpinner ? 'hidden' : null}>
                  Converter
                </span>
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <Modal show={exibirModal} onHide={handleFecharModal} data-testid="modal">
          <Modal.Header closeButton>
            <Modal.Title>conversão</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {resultadoConversao}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleFecharModal}>
              Nova conversão
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
  );
}

export default ConversorMoedas;
