import React from 'react';
import styled from 'styled-components';
import Pergunta1 from './pergunta1';

const ContainerEtapa2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0;
`



export default class Etapa2 extends React.Component {
    render() {
        return (
            <ContainerEtapa2>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <Pergunta1 pergunta={'5. Qual o curso?'}/>
                <Pergunta1 pergunta={'6. Qual a unidade de ensino?'}/>
            </ContainerEtapa2>
        );
    }
}

