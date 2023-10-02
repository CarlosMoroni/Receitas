import React from 'react';

import { Container, Img, Main, Scroll } from './styles';
import BotaoAdd from '../../components/BotaAdd';
import Receita from '../../components/Receita';

function Home() {
    return (
        <Container>
            <Img source={require('../../assets/Receitas.jpeg')} />
            <Main>
                <Scroll>
                    <Receita img={require('../../assets/imagen.png')} title='Macarrão al limone' description='macarrão ao molho de limão-siciliano'/>
                </Scroll>
                <BotaoAdd />
            </Main>
        </Container>
    );
}

export default Home;