//Importações, utilizamos o React pois necessitaremos de suas funcionalidades para trabalhar com esse componente
//O useState vai guardar o estado do mapa, se foi montado ou não
//O useEffect vai ser responsável por iniciar a instância do google maps quando o componente for carregado na tela
import React, { useEffect, useState } from 'react';

//Aqui temos um styled componente para envolver o mapa
import { MapWrapper } from './style';

//Importamos as funções que modularizamos para o código ficar mais organizado
import { createMarkers } from './MapFuncs/CreateMarkers';
import { createPolyline } from './MapFuncs/CreatePolyline';

export default function Map(){
    //Definimos o estado inicial do nossa instância do google maps
    const [googleMap, setGoogleMap] = useState(null);

    //Aqui criamos um array de objetos que guardam as coordenadas que queremos
    const points = [{ name: 'Marco zero', latitude: -8.063169, longitude: -34.871139 }, { name: 'Cais de São Pedro', latitude: -8.065202, longitude: -34.876080}];

    useEffect(() => {
        //Ele o nosso estado com uma instância do google
        setGoogleMap(window.google);
        //Verifica a instância foi criada para desenhar o mapa
        if (googleMap) {
        //Caso sim, define uma variável que vai guardar o mapa, passando algumas propriedades para ele
        //Observemos que ele monta o mapa no elemento que possui o id 'map', no caso, o nosso styled component mais a baixo
        //É possível alterar essas propriedades que passamos para o mapa, como o zoom, o centro, e algumas funções da interface
          const map = new googleMap.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: { lat: -8.063169, lng: -34.871139 },
          });
          //Chamamos nossa função para marcar dois pontos
          createMarkers(googleMap, map, points);
          //Criamos uma linha entre esses dois pontos
          createPolyline(googleMap, map, points);
        }
      }, [googleMap, points]);
      
    return(
        //Precisamos definir o id de onde o mapa vai ser renderizado
        <MapWrapper id='map'></MapWrapper>
    )
}