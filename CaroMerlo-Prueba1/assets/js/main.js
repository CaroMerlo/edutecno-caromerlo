$(document).ready(function () {
  
    
    $('.carousel').carousel ({
        interval:fasle
    });
    
    $('[data-toggle="tooltip"]').tooltip()

               
});


/*Evento. Mover el cursor sobre el elemento. cambia de color a naranjo*/
window.addEventListener('mouseover', function(evt) {  
    if (evt.target.classList.contains('navOrange')) {
      evt.target.style.color = 'orange';
    }
  });

/*Evento. Retira el cursor sobre el elemento. cambia de color a blanco*/
window.addEventListener('mouseout', function(evt) {
    if (evt.target.classList.contains('navOrange')) {
      evt.target.style.color = 'white';
    }
  });

