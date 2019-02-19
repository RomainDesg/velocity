mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbWFzMzMiLCJhIjoiY2pzYWFpcXNwMDAxbzN5cGZneGxia3U3ZCJ9.sigYT2nlLnC1siycJ3im-Q';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [4.85,45.75],
    zoom: 13,
    });

$.ajax({
    type: "GET",
    dataType: "JSON",
    url: "https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=16613431a6af103df05b4f8ff767c26f87858ec8",

    success: function(data){
        console.log(data);
        data.forEach(function(marker) {
            // create a DOM element for the marker
            var el = document.createElement('div');
            el.id = 'marker';
        console.log(el.id);
            var popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<strong>${marker.name}</strong> </br><p class="text-uppercase">Places restantes</p>${marker.available_bikes}</br><p class="text-uppercase">Vélos disponibles</p> ${marker.available_bike_stands} </br><span class="text-warning">${marker.status}</span> </br><p class="btn btn-success btn-sm text-uppercase">réserver</p>`);
        el.addEventListener('click', function() {
        window.alert(marker.properties.message);
        });
        
        // add marker to map
        new mapboxgl.Marker(el)
            .setLngLat(marker.position)
            .setPopup(popup)
            .addTo(map);
        });
    },
    error: function(data){
        console.error();
    }
})




    