mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbWFzMzMiLCJhIjoiY2pzYWFpcXNwMDAxbzN5cGZneGxia3U3ZCJ9.sigYT2nlLnC1siycJ3im-Q';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [4.85,45.75],
    zoom: 10,
    });

$.ajax({
    type: "GET",
    dataType: "JSON",
    url: "https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=16613431a6af103df05b4f8ff767c26f87858ec8",

    success: function(data){
        console.log(data);
        
    },
    error: function(data){
        console.error();
    }

})



    