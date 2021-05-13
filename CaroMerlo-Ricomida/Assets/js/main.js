$(document).ready(function () {
    $("h2").dblclick(function () {
        $(this).css({
            color:'red',
        })
    })

    $(".card-title").click(function () {
        $(this).toggle();
     })

    $("#enviarCorreo").click(function () {
       alert("El correo fue enviado exitosamente")
    })

    $('[data-toggle="tooltip"]').tooltip()

    
    $('.carousel').carousel ({
        interval:fasle
    })
 
})


