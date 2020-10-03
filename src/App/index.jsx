import { func } from 'prop-types';
import React from 'react';
import Map from '../components/Map';

import { GlobalStyle } from './style';

export default function App(){
    return(
        <>
        <GlobalStyle />
        <Map />
        </>  
        )
}