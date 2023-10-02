import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #6E0000;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;

export const Main = styled.View`
    width: 100%;
    height: 88%;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    background-color: #F0F6FE;
    align-items: center;
`;

// export const Nav = styled.View`
//     flex: 1;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     background-color: blue;
//     width: 100%;
//     padding: 0 10%;
// `;

export const Img = styled.Image`
    height: 300px;
    width: 100%;
    position: absolute;
    top: 0;
`;

export const Scroll = styled.ScrollView`
    margin-top: 3%;
    width: 95%;
    border-radius: 15px;
`;