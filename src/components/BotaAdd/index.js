import React from "react";
import { Container, Img } from "./styles";

function BotaoAdd() {
    return(
        <Container>
            <Img source={require('../../assets/plus.png')}/>
        </Container>
    );
}

export default BotaoAdd;