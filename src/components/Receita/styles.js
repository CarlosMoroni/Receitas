import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: #ffffff;
    width: 100%;
    height: 120px;
    margin-top: 2%;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 2%;
`;

export const Img = styled.Image`
    height: 95px;
    width: 95px;
    border-radius: 20px;
`;

export const Title = styled.Text`
    color: #000000;
    font-size: 20px;
`;

export const Info = styled.View`
    width: 65%;
`;

export const Description = styled.Text`
    color: #000000;
    font-size: 12px;
    flex-wrap: wrap;
`;