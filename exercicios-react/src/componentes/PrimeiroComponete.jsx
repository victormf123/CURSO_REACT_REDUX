import React from 'react';
let isLegal = true;
export default props => (
  <div>
    <h1>{props.valor}</h1>
    <h2>{props.aBcD}</h2>
    <p>Legal? {isLegal ? 'Sim' : 'Não'}</p>
    <p>{Math.random()}</p>
  </div>
);

// export default (props) => (
//   <div>
//     <h1>Primeiro Componente!</h1>;
//   </div>
// );

// export default function() {
//   return <h1>Primeiro Componente!</h1>;
// }
