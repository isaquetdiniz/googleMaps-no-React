//Aqui criamos uma função que pode criar linhas no mapa
//Ela recebe a instância googleMap que criamos, a variável map, e a localização que queremos criar marcadores
export const createPolyline = (googleMap, map, data) => {
    const polylinePaths = [];
        if (data) {
          data.map((item) => {
            return polylinePaths.push({
              lat: item.latitude,
              lng: item.longitude,
            });
          });
          const Polyline = new googleMap.maps.Polyline({
            path: polylinePaths,
            geodesic: true,
            strokeColor: '#0000FF',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            map,
          });
          return Polyline;
        }
      };