import React from 'react'

function ListarMoedas() {
  const MOEDAS = [
    {"sigla": "AUD", "descricao": "Dólar australiano"},
    {"sigla": "BGN", "descricao": "Lev búlgaro"},
    {"sigla": "BRL", "descricao": "Real brasileiro"},
    {"sigla": "CAD", "descricao": "Dólar canadense"},
    {"sigla": "CHF", "descricao": "Franco suiço"},
    {"sigla": "CNY", "descricao": "Yuan Chinês"},
    {"sigla": "CZK", "descricao": "Coroa República Tcheca"},
    {"sigla": "DKK", "descricao": "Coroa dinamarquesa"},
    {"sigla": "EUR", "descricao": "Euro"},
    {"sigla": "GBP", "descricao": "Libra Esterlina"},
    {"sigla": "HKD", "descricao": "Dólar de hong kong"},
    {"sigla": "HRK", "descricao": "Coroa Croácia"},
    {"sigla": "HUF", "descricao": "Florim húngaro"},
    {"sigla": "IDR", "descricao": "Rupia indonésia"},
    {"sigla": "ILS", "descricao": "Novo shekel israelense"},
    {"sigla": "INR", "descricao": "Rupia indiana"},
    {"sigla": "JPY", "descricao": "Iene japonês"},
    {"sigla": "KRW", "descricao": "Won sul-coreano"},
    {"sigla": "MXN", "descricao": "Peso mexicano"},
    {"sigla": "MYR", "descricao": "Malásia Ringgit"},
    {"sigla": "NOK", "descricao": "Coroa Noruega"},
    {"sigla": "NZD", "descricao": "Dólar da Nova Zelândia"},
    {"sigla": "PHP", "descricao": "Peso filipino"},
    {"sigla": "PLN", "descricao": "Zoty Polónia"},
    {"sigla": "RON", "descricao": "Leu romeno"},
    {"sigla": "RUB", "descricao": "Belarus Ruble"},
    {"sigla": "SEK", "descricao": "Coroa Suécia"},
    {"sigla": "SGD", "descricao": "Dolár Singapura"},
    {"sigla": "THB", "descricao": "Baht Tailândia"},
    {"sigla": "TRY", "descricao": "Lira turca"},
    {"sigla": "USD", "descricao": "Dólar dos Estados Unidos"},
    {"sigla": "ZAR", "descricao": "Rand África do Sul"},
  ]

  function compare(moeda1, moeda2) {
    if(moeda1.descricao < moeda2.descricao){
      return -1
    }else if (moeda1.descricao > moeda2.descricao){
      return 1
    }
    return 0
  }

  return MOEDAS.sort(compare).map(moeda => 
    <option value={moeda.sigla} key={moeda.sigla}>
      {moeda.descricao}
    </option>)
}

export default ListarMoedas