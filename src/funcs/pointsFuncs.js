module.exports = {
    distanceBetweenPoints: (lat1, lon1, lat2, lon2, unit) => {
      if (lat1 === lat2 && lon1 === lon2) {
        return 0;
      }
  
      const radlat1 = (Math.PI * lat1) / 180;
      const radlat2 = (Math.PI * lat2) / 180;
      const theta = lon1 - lon2;
      const radtheta = (Math.PI * theta) / 180;
      let dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit === 'K') {
        dist *= 1.609344;
      }
      if (unit === 'N') {
        dist *= 0.8684;
      }
      return dist;
    },
    getPointAtDistance: (path, dist) => {
      // Special cases
      if (dist === 0) return path.getAt(0);
      if (dist < 0) return null;
      if (path.length < 2) return null;
  
      let tempDist = 0;
      let oldTempDist = 0;
      let i = 1;
      for (; i < path.length && tempDist < dist; i += 1) {
        oldTempDist = tempDist;
        tempDist += module.exports.distanceBetweenPoints(
          path[i].latitude,
          path[i].longitude,
          path[i - 1].latitude,
          path[i - 1].longitude,
          'K',
        );
      }
  
      if (tempDist < dist) return null;
  
      const p1 = path[i - 2];
      const p2 = path[i - 1];
      const m = (dist - oldTempDist) / (tempDist - oldTempDist);
  
      return {
        lat: p1.latitude + (p2.latitude - p1.latitude) * m,
        lng: p1.longitude + (p2.longitude - p1.longitude) * m,
      };
    },
  };
  