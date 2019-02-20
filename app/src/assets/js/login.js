$("#formLogin").on("submit", function(){
    event.preventDefault();
    // console.log("on submit");  Pour checker que ça fonctionne !
    const serializeFormLogin = $(this).serialize();
    console.log(serializeFormLogin);
    // AJAX request (checkUser.php)
    $.ajax({
        type:"POST", 
        url: `${urlAPI}/checkUser.php`,
        data: serializeFormLogin,
        success: function(data){
            console.log(data);
            data = JSON.parse(data);
            console.log(data);
            if(data.username){
                $("formLogin").hide();
                $("#map").show();
                
                var mapDiv = $("#map");
                var canvasMap = $(".mapboxgl-canvas");

                mapDiv.css("width", "100%");
                canvasMap.css("width", "100%");
                map.resize();
            }
        }
    })
})    

// on submit form login
    // afficher usernam et password (serialize) 
    // Ajax request (checkUser.php)