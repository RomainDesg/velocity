mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbWFzMzMiLCJhIjoiY2pzYWFpcXNwMDAxbzN5cGZneGxia3U3ZCJ9.sigYT2nlLnC1siycJ3im-Q';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/basic-v9',
    center: [4.85,45.75],
    zoom:15,
    });
 
    var urlAPI = "http://localhost/projet/velocity/api";

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
            .setHTML(`
                <strong>${marker.name}</strong></br>
                <p class="text-uppercase">Vélos disponibles</p></br>
                <h3>${marker.available_bikes} / ${marker.bike_stands}</h3>
                </br><span class="text-warning">${marker.status}</span>
                <form onSubmit="formSubmitPopup(event)">
                    <input type="submit" class="btn btn-sm btn-success value="RESERVER">
                </form>`);  
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



function formSubmitPopup(event){
    event.preventDefault();
    // AJAX request
    $.ajax({
        type: "POST",
        url:`${urlAPI}/index.php`,
        data: "test",
        success: function(data){
            console.log(data);
        }
    }) 
}




    