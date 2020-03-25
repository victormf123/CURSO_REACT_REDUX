import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import PrimeiroComponente from './componentes/PrimeiroComponete';
// import { CompA, CompB } from './componentes/DoisComponentes';
// import MultiElementos from './componentes/MultiElementos';
// import FamiliaSilva from './componentes/FamiliaSilva';
// import Familia from './componentes/Familia';
// import Membro from './componentes/Membro';
// import ComponenteComFuncao from './componentes/ComponenteComFuncao';
// import Pai from './componentes/Pai';
// import ComponenteClasse from './componentes/ComponenteClasse';
// import Contador from './componentes/Contador';
import Hook from './componentes/Hook';

ReactDOM.render(
  <div>
    <Hook />
    {/*<Contador numeroInicial={0} />*/}
    {/*<ComponenteClasse valor="Sou um componente de classe!" />*/}
    {/*<Pai />*/}
    {/*<ComponenteComFuncao />*/}
    {/*<Familia sobrenome="Pereira" numero={123}>
        <Membro nome="Andre" />
        <Membro nome="Mariana" />
      </Familia>*/}
    {/*
      <FamiliaSilva sobrenome="Silva" />
      <MultiElementos />
      <PrimeiroComponente valor="Bom dia!" aBcD={2 ** 8} />
      <CompA valor="Olá eu sou A!" />
      <CompA valor="B na área!" />
      */}
  </div>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <ul>
//     <li>1) Pedro</li>
//     <li>2) Maria</li>
//     <li>3) Ana</li>
//   </ul>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
