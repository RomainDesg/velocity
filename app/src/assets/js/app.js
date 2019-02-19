$(document).ready(function(){
    $.ajax({
        type:"get",
        url: "https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=16613431a6af103df05b4f8ff767c26f87858ec8",
        success: function(data){
            console.log(data);
        },
        error: function(data){
            console.log("error");
        }
    })
})
$("#form").on("submit", function(event){
    event.preventDefault();
    // Récupérer pseudo du formulaire
    pseudo = $("input[name=pseudo]").val();
    
    // Récupérer password du formulaire
    password = $("input[type=password]").val();
    
    // Stocker dans un tableau les deux valeurs
    tabForm = [pseudo, password];
    //console.log(tabForm);
    
    // Stocker dans un objet les deux valeurs
    objForm = {
        "pseudo": pseudo,
        "password": password
    }
    // console.log(objForm);
    // console.log(objForm.pseudo); // Select attribut pseudo

    serializeForm = $(this).serialize();
    // console.log(serializeForm);
    
    $.ajax({
        type:"get",
        url: "script.php",
        data: serializeForm,
        success: function(data){
            console.log(data);
            data = JSON.parse(data);

            if(data.error){
                console.log("Erreur de connexion");
            }else{
                // Afficher la map
                $("#map").show();
                // Supprimer le formulaire
                $("#form").hide();
            }
        },
        error: function(data){
            console.log("error");
        }
    })

})