import {React, useState} from 'react';

import { Container } from '../../components/styles';
import { Box, StyledForm } from './styles';
import Menu from '../../components/Menu';
import api from '../../server';

function General() {
    const [local, setLocal] = useState(null);
    const [qtdMax, setQtdMax] = useState(0);

    async function submit() {
        try {
            await api.put('place/update', {description: local, max_quantity: qtdMax});
            alert('Quantidade cadastrada!');
        } catch (error) {
            alert('Erro: '+ error);
        }
    }

    return (
        <Container>
            <Menu />
            <Box>
                <StyledForm>
                    <h2>Informações do Local</h2>
                    <input type = "text" max = "100" placeholder = "Local" onChange={event => {setLocal(event.target.value)}}/>
                    <input type = "number" placeholder = "Quantidade Máxima" onChange={event => {setQtdMax(event.target.value)}}/>
                    <button type="button" onClick={event => {submit();}}> Enviar</button>
                </StyledForm>
            </Box>
        </Container>
        
    );
}

export default General;