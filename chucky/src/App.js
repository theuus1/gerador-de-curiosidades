import minhaImagem from "./img/person.png"

import React, { useState } from 'react';
import axios from 'axios';

function GeradorDeCuriosidades() {
  const [curiosidade, setCuriosidade] = useState('');

  const gerarCuriosidade = () => {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => {
        const joke = response.data.value;
        setCuriosidade(joke);
      })
      .catch(error => {
        console.error('Erro ao obter a curiosidade:', error);
      });
  };

  return (
    <div className="container">
      <h1>Gerador de curiosidades</h1>
      <div className="containerInforms">
        <img src={minhaImagem} alt="Olá" />
      </div>
      {curiosidade && (
        <div className="text">
          <p>{curiosidade}</p>
        </div>
      )}
      <div className="containerInput">
        <button className="button-chucky" onClick={gerarCuriosidade}>Gere uma curiosidade</button>
      </div>
    </div>
  );
}

export default GeradorDeCuriosidades;

