import React from "react";
import { Container, Description, Img, Info, Title } from "./styles";

function Receita(props) {
    
    return (
        <Container>
            <Img source={props.img} alt="imagen receita" />
            <Info>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
            </Info>
        </Container>
    );
}

export default Receita;