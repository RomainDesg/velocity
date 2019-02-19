mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbWFzMzMiLCJhIjoiY2pzYWFpcXNwMDAxbzN5cGZneGxia3U3ZCJ9.sigYT2nlLnC1siycJ3im-Q';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [4.85,45.75],
    zoom: 10,
    });
    
    var geojson = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "message": "Foo",
                    "iconSize": [30, 30],
                },
                "geometry": {
                        "type": "Point",
                        "coordinates": [4.85,45.75]
                }
            },
        ]
    }

    // var url = 'https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=16613431a6af103df05b4f8ff767c26f87858ec8';
    // var oXhr = new XMLHttpRequest();
    // oXhr.onload = function () {
    //   var data = JSON.parse(this.responseText);
    //   // ici les données sont exploitables
    //   console.log('retour : ', data);
    // };
    // oXhr.onerror = function (data) {
    //   console.log('Erreur ...');
    // };
    // oXhr.open('GET', url, true);
    // oXhr.send(null);


    geojson.features.forEach(function(marker) {
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
        el.style.width = marker.properties.iconSize[0] + 'px';
        el.style.height = marker.properties.iconSize[1] + 'px';
        
        // el.addEventListener('click', function() {
        //     window.alert(marker.properties.message);
        // });
        
        // add marker to map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });

    // map.addControl(new mapboxgl.GeolocateControl({
    //     positionOptions: {
    //         enableHighAccuracy: true
    //     },
    //     trackUserLocation: true
    // }));