import React from 'react';
import styled from 'styled-components';
import Pergunta2 from './pergunta2';
import Pergunta1 from './pergunta1';

const ContainerEtapa1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0;
`

export default class Etapa1 extends React.Component {

    render() {
        return (
            <ContainerEtapa1>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <Pergunta1 pergunta={"1. Qual o seu nome?"} />
                <Pergunta1 pergunta={"2. Qual sua idade?"} />
                <Pergunta1 pergunta={"3. Qual seu email?"} />
                <Pergunta2
                    pergunta={"4. Qual a sua escolaridade?"}
                    opcoes={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                    ]}
                />
            </ContainerEtapa1>
        );
    }
}