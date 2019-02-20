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
        }
    })
})    

// on submit form login
    // afficher usernam et password (serialize) 
    // Ajax request (checkUser.php)