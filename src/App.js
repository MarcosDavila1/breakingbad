import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';
import logo from './logo.svg'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFFFFF;
  margin: 1rem 0;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 500px;
  }
`;

function App() {

  //state de frase
  const [frase, guardarFrase] = useState({});
  

  const consultarApi = async () => {
    const api = await fetch("http://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

  //cargar una frase
  useEffect(() => {
    consultarApi();
  }, [])

  return (

    <Contenedor>
      <Frase 
        frase={frase}
        logo={logo}
      />

      <Boton
        onClick={consultarApi}
      >
          Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
