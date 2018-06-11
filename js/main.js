
var documentEl = $(document);



documentEl.on('scroll', function () { 
    if (window.pageYOffset > 100) {
        document.getElementById('barra-navegacao').style.backgroundColor = '#22658B';
        document.querySelector('#barra-navegacao a').style.color = '#fff';
        
    }
    else {
        document.getElementById('barra-navegacao').style.backgroundColor = 'transparent';
      
    }
  
});


$('#carouselComentarios').carousel({
    interval: 3000
});

$('#carouselCaracteristicas').carousel({
    interval: 6000
});


