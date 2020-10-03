import { createGlobalStyle } from 'styled-components';

//Esse é um componente especial do styled components que modifica o estilo global

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;