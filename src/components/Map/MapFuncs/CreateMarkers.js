//Aqui criamos uma função que pode criar Marcadores no Mapa
//Ela recebe a instância googleMap que criamos, a variável map, a localização que queremos criar marcadores, e o ícone (opcional)
export const createMarkers = (googleMap, map, data, icon) => {
    const markers = [];
        if (data) {
        data.map((item) => {
            return markers.push(
              new googleMap.maps.Marker({
                position: {
                  lat: item.latitude,
                  lng: item.longitude,
                },
                map,
                title: item.name,
                icon,
              }),
            );
          });
        }
      };

