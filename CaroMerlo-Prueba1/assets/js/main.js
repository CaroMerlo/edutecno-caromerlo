$(document).ready(function () {
  
    
    $('.carousel').carousel ({
        interval:fasle
    });
    
    $('[data-toggle="tooltip"]').tooltip()

               
});


window.addEventListener('mouseover', function(evt) {  
    if (evt.target.classList.contains('navOrange')) {
      evt.target.style.color = 'orange';
    }
  });

  
window.addEventListener('mouseout', function(evt) {
    if (evt.target.classList.contains('navOrange')) {
      evt.target.style.color = 'white';
    }
  });

