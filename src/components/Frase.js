import React, {Fragment} from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #FFFFFF;
    max-width: 800px;
    margin-top: 3rem;

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Frase = ({frase, logo}) => {
    return ( 

        <Fragment>
            
            <img src={logo}/>            

            <ContenedorFrase>
                <h1>{frase.quote}</h1>
                <p>{frase.author}</p>
            </ContenedorFrase>
        </Fragment>
     );
}
 
export default Frase;