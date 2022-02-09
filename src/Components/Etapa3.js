import React from 'react';
import styled from 'styled-components';
import Pergunta1 from './pergunta1';
import Pergunta2 from './pergunta2';

const ContainerEtapa3 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 0;
`


export default class Etapa3 extends React.Component {
    render() {
        return (
            <ContainerEtapa3>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <Pergunta1 pergunta={'7. Por que você não terminou um curso de graduação?'}/>
                <Pergunta2
                pergunta={'8. Você fez algum curso complementar?'}
                opcoes={[
                    'Nenhum',
                    'Curso técnico',
                    'Curso de inglês'
                ]}/>
            
            </ContainerEtapa3>
        );
    }
}