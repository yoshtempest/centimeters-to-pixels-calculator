import styled from "styled-components"


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    position: relative;
    font-size: 20px;
    background-color: #fafafa;
    color: black;
    align-items: center;
    justify-content: center;
    border: 1px rgba(0, 0, 0, 0.2) solid;
    border-radius: 10px;
    cursor: pointer;
    height: 40px;
    width: 60px;
    margin-left: 5px;
    margin-bottom: 0px;
`;
